import { updateOrganization, updateOrganizationVariables } from './../../../graphql/types/updateOrganization';
import { getOrganization } from './../../../graphql/types/getOrganization';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as CompaniesActions from './companies.actions';
import { ApolloError } from '@apollo/client';
import { Apollo } from 'apollo-angular';
import getOrganizationQuery from '../../graphql/queries/get-organization.graphql';
import updateOrganizationMutation from '../../graphql/mutations/update-organization.graphql';

@Injectable()
export class CompaniesEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly apollo: Apollo
  ) {}

  getCompany$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CompaniesActions.getCompany),
      concatMap(action =>this.apollo.watchQuery<getOrganization>({
        query: getOrganizationQuery,
        variables: { id: action.id },
      })
        .valueChanges
        .pipe(
          map(result => CompaniesActions.getCompanySuccess({ data: result.data })),
          catchError((error: ApolloError) => of(CompaniesActions.getCompanyFailure({ error })))
        ))
    );
  });

  updateCompany$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CompaniesActions.updateCompany),
      concatMap(action => this.apollo.mutate<updateOrganization, updateOrganizationVariables>({
        mutation: updateOrganizationMutation,
        variables: {
          command: {
            id: action.data.id,
            name: action.data.name,
          },
        },
      }).pipe(
        map(result => CompaniesActions.updateCompanySuccess({
          data: result.data!,
        })),
        catchError((error: ApolloError) => of(CompaniesActions.updateCompanyFailure({ error })))
      ))
    );
  });
}
