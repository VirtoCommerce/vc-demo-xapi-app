import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, filter } from 'rxjs/operators';
import { forkJoin, from, Observable, of } from 'rxjs';
import createOrganizationMutation from 'src/app/graphql/mutations/create-organization.graphql';
import createContactMutation from 'src/app/graphql/mutations/create-contact.graphql';
import createUserMutation from 'src/app/graphql/mutations/create-user.graphql';
import updateMemberDynamicPropertiesMutation
  from 'src/app/graphql/mutations/update-memberDynamicProperties.graphql';
import registerByInvitationMutation from 'src/app/graphql/mutations/register-by-invitation.graphql';
import getUserQuery from 'src/app/graphql/queries/get-user.graphql';
import * as RegistrationActions from './registration.actions';
import { Apollo } from 'apollo-angular';
import { createOrganization, createOrganizationVariables } from 'src/app/graphql/types/createOrganization';
import { createContact, createContactVariables } from 'src/app/graphql/types/createContact';
import { ApolloError } from '@apollo/client/errors';
import { createUser, createUserVariables } from 'src/app/graphql/types/createUser';
import { Store } from '@ngrx/store';
import { selectCompanyRegistration, selectRegistrationByInvitation } from './registration.selectors';
import { Router } from '@angular/router';
import { selectCountriesState } from 'src/app/store/countries/countries.selectors';
import { nonNull } from 'src/app/helpers/nonNull';
import { updateMemberDynamicProperties,
  updateMemberDynamicPropertiesVariables } from 'src/app/graphql/types/updateMemberDynamicProperties';
import { CompanyMember, CompanyRegistration } from 'src/app/models/registration.model';
import { Country } from 'src/app/models/country.model';
import { FetchResult } from '@apollo/client/core';
import { registerByInvitation, registerByInvitationVariables } from 'src/app/graphql/types/registerByInvitation';
import { getUser, getUserVariables } from 'src/app/graphql/types/getUser';

@Injectable()
export class CompanyEffects {
  registerCompany$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RegistrationActions.registerCompany),
      concatLatestFrom(() => [
        this.store.select(selectCompanyRegistration),
        this.store.select(selectCountriesState).pipe(filter(nonNull)),
      ]),
      concatMap(([
        _,
        companyRegistration,
        countries,
      ]) => this.createOrganization(companyRegistration, countries).pipe(
        concatMap(result => forkJoin([
          this.updateMemberDynamicProperties(companyRegistration, result),
          this.createContact(companyRegistration, result),
        ]).pipe(
          concatMap(([
            __,
            contactResult,
          ]) => this.createUser(companyRegistration, contactResult).pipe(
            map(result => RegistrationActions.registerCompanySuccess({
              data: result.data?.createUser?.succeeded ?? false,
            })),
            catchError((error: ApolloError) => of(RegistrationActions.registerCompanyFailure({ error })))
          ))
        ))
      ))
    );
  });

  clearCompanyAfterRegistration$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RegistrationActions.registerCompanySuccess),
      concatMap(() => of(RegistrationActions.clearCompanyRegistration()))
    );
  });

  getInvitedUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RegistrationActions.getInvitedUser),
      concatMap(action => this.getInvitedUser(action.userId).pipe(
        map(result => RegistrationActions.getInvitedUserSuccess({
          email: result.data?.user?.email as string,
        })),
        catchError((error: ApolloError) => of(RegistrationActions.getInvitedUserFailed({ error })))
      ))
    );
  });

  registerByInvitation$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RegistrationActions.registerByInvitation),
      concatLatestFrom(() => [
        this.store.select(selectRegistrationByInvitation),
      ]),
      concatMap(([
        action,
        registrationByInvitation,
      ]) => this.registerByInvitation(action.userId, action.token, registrationByInvitation).pipe(
        map(result => RegistrationActions.registerCompanySuccess({
          data: result.data?.registerByInvitation?.succeeded ?? false,
        })),
        catchError((error: ApolloError) => of(RegistrationActions.registerCompanyFailure({ error })))
      ))
    );
  });

  clearRegistrationByInvitation$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RegistrationActions.registerByInvitationSuccess),
      concatMap(() => of(RegistrationActions.clearRegistrationByInvitation()))
    );
  });

  redirectToThankYouPage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RegistrationActions.registerCompanySuccess, RegistrationActions.registerByInvitationSuccess),
      concatMap(() => from(this.router.navigate(
        [
          'registration',
          'thank-you',
        ],
        {
          state: {
            message: 'Registration completed!',
            buttonTitle: 'Add another one',
          },
        }
      )))
    );
  }, { dispatch: false });

  constructor(
    private readonly store: Store,
    private readonly actions$: Actions,
    private readonly apollo: Apollo,
    private readonly router: Router
  ) { }

  createOrganization(
    companyRegistration: CompanyRegistration,
    countries: Country[]
  ): Observable<FetchResult<createOrganization>> {
    return this.apollo.mutate<createOrganization, createOrganizationVariables>({
      mutation: createOrganizationMutation,
      variables: {
        command: {
          name: companyRegistration.name,
          addresses: [
            {
              ...companyRegistration.address,
              countryName: countries.find(country => {
                return country.id === companyRegistration.address.countryCode;
              })?.name as string,
              addressType: 3,
            },
          ],
        },
      },
    });
  }

  updateMemberDynamicProperties(
    companyRegistration: CompanyRegistration,
    result: FetchResult<createOrganization>
  ): Observable<FetchResult<updateMemberDynamicProperties>> {
    return this.apollo.mutate<updateMemberDynamicProperties, updateMemberDynamicPropertiesVariables>({
      mutation: updateMemberDynamicPropertiesMutation,
      variables: {
        command: {
          memberId: result.data?.createOrganization?.id as string,
          dynamicProperties: [
            {
              name: 'Tax number',
              value: companyRegistration.taxNumber,
            },
            {
              name: 'Sector',
              value: companyRegistration.sector,
            },
          ],
        },
      },
    });
  }

  createContact(
    companyRegistration: CompanyRegistration,
    result: FetchResult<createOrganization>
  ): Observable<FetchResult<createContact>> {
    return this.apollo.mutate<createContact, createContactVariables>({
      mutation: createContactMutation,
      variables: {
        command: {
          name: `${companyRegistration.owner.firstName} ${companyRegistration.owner.lastName}`,
          firstName: companyRegistration.owner.firstName,
          lastName: companyRegistration.owner.lastName,
          organizations: [
            result.data?.createOrganization?.id ?? null,
          ],
        },
      },
    });
  }

  createUser(
    companyRegistration: CompanyRegistration,
    result: FetchResult<createContact>
  ): Observable<FetchResult<createUser>> {
    return this.apollo.mutate<createUser, createUserVariables>({
      mutation: createUserMutation,
      variables: {
        command: {
          userName: companyRegistration.owner.userName,
          email: companyRegistration.owner.email,
          password: companyRegistration.owner.password,
          storeId: 'xapi',
          userType: 'Customer',
          memberId: result.data?.createContact?.id ?? null,
        },
      },
    });
  }

  getInvitedUser(
    userId: string
  ): Observable<FetchResult<getUser>> {
    return this.apollo.watchQuery<getUser, getUserVariables>({
      query: getUserQuery,
      variables: {
        id: userId,
      },
    }).valueChanges;
  }

  registerByInvitation(
    userId: string,
    token: string,
    companyMember: CompanyMember
  ): Observable<FetchResult<registerByInvitation>> {
    return this.apollo.mutate<registerByInvitation, registerByInvitationVariables>({
      mutation: registerByInvitationMutation,
      variables: {
        command: {
          userId,
          token,
          firstName: companyMember.firstName,
          lastName: companyMember.lastName,
          phone: companyMember.phone,
          username: companyMember.userName,
          password: companyMember.password,
        },
      },
    });
  }
}
