import { selectCurrentCulture, selectEditedCompany } from './companies.selectors';
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
import getOrganizationsQuery from '../../../graphql/queries/get-organizations.graphql';
import updateOrganizationMutation from '../../../graphql/mutations/update-organization.graphql';
import { Store } from '@ngrx/store';
import {
  updateMemberDynamicProperties,
  updateMemberDynamicPropertiesVariables,
} from 'src/app/graphql/types/updateMemberDynamicProperties';
import updateMemberDynamicPropertiesMutation
  from 'src/app/graphql/mutations/update-memberDynamicProperties.graphql';
import { Company } from 'src/app/models/company.model';
import { nullable } from 'src/app/helpers/nullable';
import { COMPANY_DYNAMIC_PROPERTIES } from '../constants/dynamic-properties';
import { getOrganizations } from 'src/app/graphql/types/getOrganizations';

@Injectable()
export class CompaniesEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly apollo: Apollo,
    private readonly store: Store
  ) {}

  getCompany$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CompaniesActions.getCompany, CompaniesActions.setActiveCulture, CompaniesActions.updateCompanySuccess),
      concatLatestFrom(() => [
        this.store.select(selectCurrentCulture),
      ]),
      switchMap(([
        action,
        cultureName,
      ]) => this.apollo.watchQuery<getOrganization>({
        query: getOrganizationQuery,
        variables: {
          id: action.id,
          cultureName,
        },
      })
        .valueChanges
        .pipe(
          map(result => CompaniesActions.getCompanySuccess({ data: result.data })),
          catchError((error: ApolloError) => of(CompaniesActions.getCompanyFailure({ error })))
        ))
    );
  });

  getCompanies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CompaniesActions.getCompanies),
      switchMap(action => this.apollo.watchQuery<getOrganizations>({
        query: getOrganizationsQuery,
        variables: {
          count: action.count,
          cursor: action.cursor,
          sort: action.sort,
          searchPhrase: action.searchPhrase,
        },
      }).valueChanges.pipe(
        map(result => CompaniesActions.getCompaniesSuccess({ data: result.data })),
        catchError((error: ApolloError) => of(CompaniesActions.getCompaniesFailure({ error })))
      ))
    );
  });

  updateCompany$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CompaniesActions.updateCompany),
      concatLatestFrom(() => [
        this.store.select(selectEditedCompany),
        this.store.select(selectCurrentCulture),
      ]),
      concatMap(([
        _,
        company,
        cultureName,
      ]) => forkJoin([
        this.updateOrganization(company),
        this.updateMemberDynamicProperties(company, cultureName),
      ]).pipe(
        map(([
          updateOrganizationResult,
          __,
        ]) => CompaniesActions.updateCompanySuccess({
          id: updateOrganizationResult.data?.updateOrganization?.id as string,
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
    company: Company,
    cultureName: string
  ): Observable<FetchResult<updateMemberDynamicProperties>> {
    return this.apollo.mutate<updateMemberDynamicProperties, updateMemberDynamicPropertiesVariables>({
      mutation: updateMemberDynamicPropertiesMutation,
      variables: {
        command: {
          memberId: company.id,
          dynamicProperties: [
            {
              name: COMPANY_DYNAMIC_PROPERTIES.shortTextUsual,
              value: company.shortTextUsual,
            },
            {
              name: COMPANY_DYNAMIC_PROPERTIES.longTextUsual,
              value: company.longTextUsual,
            },
            {
              name: COMPANY_DYNAMIC_PROPERTIES.integerUsual,
              value: company.integerUsual,
            },
            {
              name: COMPANY_DYNAMIC_PROPERTIES.decimalNumberUsual,
              value: company.decimalNumberUsual?.toString(),
            },
            {
              name: COMPANY_DYNAMIC_PROPERTIES.date,
              value: nullable(company.date, value => new Date(value))?.toISOString(),
            },
            {
              name: COMPANY_DYNAMIC_PROPERTIES.boolean,
              value: company.boolean?.toString(),
            },
            {
              name: COMPANY_DYNAMIC_PROPERTIES.shortTextDictionary,
              value: company.shortTextDictionary,
            },
            {
              name: COMPANY_DYNAMIC_PROPERTIES.image,
              value: company.image,
            },
            {
              name: COMPANY_DYNAMIC_PROPERTIES.htmlUsual,
              value: company.htmlUsual,
            },
            {
              name: COMPANY_DYNAMIC_PROPERTIES.shortTextMultilingual,
              value: company.shortTextMultilingual,
              locale: cultureName,
            },
            {
              name: COMPANY_DYNAMIC_PROPERTIES.longTextMultilingual,
              value: company.longTextMultilingual,
              locale: cultureName,
            },
            {
              name: COMPANY_DYNAMIC_PROPERTIES.htmlMultilingual,
              value: company.htmlMultilingual,
              locale: cultureName,
            },
          ],
        },
      },
      refetchQueries: [
        {
          query: getOrganizationQuery,
          variables: {
            id: company.id,
            cultureName,
          },
        },
      ],
    });
  }
}
