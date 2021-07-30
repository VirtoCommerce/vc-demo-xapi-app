import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, filter } from 'rxjs/operators';
import { forkJoin, from, Observable, of } from 'rxjs';
import createOrganizationMutation from 'src/app/graphql/mutations/create-organization.graphql';
import createContactMutation from 'src/app/graphql/mutations/create-contact.graphql';
import createUserMutation from 'src/app/graphql/mutations/create-user.graphql';
import updateMemberDynamicPropertiesMutation
  from 'src/app/graphql/mutations/update-memberDynamicProperties.graphql';

import * as CompanyActions from './company.actions';
import { Apollo } from 'apollo-angular';
import { createOrganization, createOrganizationVariables } from 'src/app/graphql/types/createOrganization';
import { createContact, createContactVariables } from 'src/app/graphql/types/createContact';
import { ApolloError } from '@apollo/client/errors';
import { createUser, createUserVariables } from 'src/app/graphql/types/createUser';
import { Store } from '@ngrx/store';
import { selectCompanyRegistration } from './company.selectors';
import { Router } from '@angular/router';
import { selectCountriesState } from 'src/app/store/countries/countries.selectors';
import { nonNull } from 'src/app/helpers/nonNull';
import { updateMemberDynamicProperties,
  updateMemberDynamicPropertiesVariables } from 'src/app/graphql/types/updateMemberDynamicProperties';
import { CompanyRegistration } from 'src/app/models/company-registration.model';
import { Country } from 'src/app/models/country.model';
import { FetchResult } from '@apollo/client/core';

@Injectable()
export class CompanyEffects {
  registerCompany$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(CompanyActions.registerCompany),
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
            _,
            result,
          ]) => this.createUser(companyRegistration, result).pipe(
            map(result => CompanyActions.registerCompanySuccess({
              data: result.data?.createUser?.succeeded ?? false,
            })),
            catchError((error: ApolloError) => of(CompanyActions.registerCompanyFailure({ error })))
          ))
        ))
      ))
    );
  });

  clearCompanyAfterRegistration$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(CompanyActions.registerCompanySuccess),
      concatMap(() => of(CompanyActions.clearCompany()))
    );
  });

  redirectToThankYouPage$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(CompanyActions.registerCompanySuccess),
      concatMap(() => from(this.router.navigate([
        'registration',
        'thank-you',
      ])))
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
          userType: 'Customer',
          memberId: result.data?.createContact?.id ?? null,
        },
      },
    });
  }
}
