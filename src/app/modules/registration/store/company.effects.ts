import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import createOrganizationMutation from 'src/app/graphql/mutations/create-organization.graphql';
import createContactMutation from 'src/app/graphql/mutations/create-contact.graphql';
import createUserMutation from 'src/app/graphql/mutations/create-user.graphql';

import * as CompanyActions from './company.actions';
import { Apollo } from 'apollo-angular';
import { createOrganization, createOrganizationVariables } from 'src/app/graphql/types/createOrganization';
import { createContact, createContactVariables } from 'src/app/graphql/types/createContact';
import { ApolloError } from '@apollo/client/errors';
import { createUser, createUserVariables } from 'src/app/graphql/types/createUser';
import { Store } from '@ngrx/store';
import { selectCompany } from './company.selectors';
import { Router } from '@angular/router';

@Injectable()
export class CompanyEffects {
  registerCompany$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(CompanyActions.registerCompany),
      concatLatestFrom(() => this.store.select(selectCompany)),
      concatMap(([
        _,
        company,
      ]) => this.apollo.mutate<createOrganization, createOrganizationVariables>({
        mutation: createOrganizationMutation,
        variables: {
          command: {
            name: company.name,
            addresses: [
              {
                ...company.address,
                addressType: 3,
              },
            ],
          },
        },
      })
        .pipe(
          concatMap(result => this.apollo.mutate<createContact, createContactVariables>({
            mutation: createContactMutation,
            variables: {
              command: {
                name: `${company.owner.firstName} ${company.owner.lastName}`,
                firstName: company.owner.firstName,
                lastName: company.owner.lastName,
                organizations: [
                  result.data?.createOrganization?.id ?? null,
                ],
              },
            },
          }).pipe(
            concatMap(result => this.apollo.mutate<createUser, createUserVariables>({
              mutation: createUserMutation,
              variables: {
                command: {
                  userName: company.owner.userName,
                  email: company.owner.email,
                  password: company.owner.password,
                  userType: 'Customer',
                  memberId: result.data?.createContact?.id ?? null,
                },
              },
            }).pipe(
              map(result => CompanyActions.registerCompanySuccess({
                data: result.data?.createUser?.succeeded ?? false,
              })),
              catchError((error: ApolloError) => of(CompanyActions.registerCompanyFailure({ error })))
            ))
          ))
        ))
    );
  });

  companyRegistered$ = createEffect(() => {
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
}
