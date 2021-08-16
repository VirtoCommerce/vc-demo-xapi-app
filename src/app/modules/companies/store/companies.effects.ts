import { selectEditedCompany } from './companies.selectors';
import { updateOrganization, updateOrganizationVariables } from './../../../graphql/types/updateOrganization';
import { getOrganization } from './../../../graphql/types/getOrganization';
import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap } from 'rxjs/operators';
import { forkJoin, Observable, of } from 'rxjs';

import * as CompaniesActions from './companies.actions';
import { ApolloError, FetchResult } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import getOrganizationQuery from '../../../graphql/queries/get-organization.graphql';
import updateOrganizationMutation from '../../../graphql/mutations/update-organization.graphql';
import { Store } from '@ngrx/store';
import {
  updateMemberDynamicProperties,
  updateMemberDynamicPropertiesVariables,
} from 'src/app/graphql/types/updateMemberDynamicProperties';
import updateMemberDynamicPropertiesMutation
  from 'src/app/graphql/mutations/update-memberDynamicProperties.graphql';
import { Company } from 'src/app/models/company.model';

@Injectable()
export class CompaniesEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly apollo: Apollo,
    private readonly store: Store
  ) {}

  getCompany$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CompaniesActions.getCompany),
      switchMap(action =>this.apollo.watchQuery<getOrganization>({
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
      concatLatestFrom(() => [
        this.store.select(selectEditedCompany),
      ]),
      concatMap(([
        _,
        company,
      ]) => forkJoin([
        this.updateOrganization(company),
        this.updateMemberDynamicProperties(company),
      ]).pipe(
        map(([
          updateOrganizationResult,
          updateMemberDynamicPropertiesResult,
        ]) => CompaniesActions.updateCompanySuccess({
          data: {
            ...updateOrganizationResult.data as updateOrganization,
            ...updateMemberDynamicPropertiesResult.data as updateMemberDynamicProperties,
          },
        })),
        catchError((error: ApolloError) => of(CompaniesActions.updateCompanyFailure({ error })))
      ))
    );
  });

  updateOrganization(
    company: Company
  ): Observable<FetchResult<updateOrganization>> {
    return this.apollo.mutate<updateOrganization, updateOrganizationVariables>({
      mutation: updateOrganizationMutation,
      variables: {
        command: {
          id: company.id,
          name: company.name,
        },
      },
    });
  }

  updateMemberDynamicProperties(
    company: Company
  ): Observable<FetchResult<updateMemberDynamicProperties>> {
    return this.apollo.mutate<updateMemberDynamicProperties, updateMemberDynamicPropertiesVariables>({
      mutation: updateMemberDynamicPropertiesMutation,
      variables: {
        command: {
          memberId: company.id,
          dynamicProperties: [
            {
              name: 'Short text | Usual',
              value: company.shortTextUsual,
            },
            {
              name: 'Long text | Usual',
              value: company.longTextUsual,
            },
            {
              name: 'Integer | Usual',
              value: company.integerUsual?.toString(),
            },
            {
              name: 'Decimal number | Usual',
              value: company.decimalNumberUsual?.toString(),
            },
            {
              name: 'Date',
              value: company.date?.toUTCString(),
            },
            {
              name: 'Boolean',
              value: company.boolean?.toString(),
            },
          ],
        },
      },
    });
  }
}
