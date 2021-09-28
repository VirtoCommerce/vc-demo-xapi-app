import { PartialDeep } from 'type-fest';
import { Company } from '../../../models/company.model';
import { ApolloError } from '@apollo/client/core';
import { createAction, props } from '@ngrx/store';
import { getOrganization } from 'src/app/graphql/types/getOrganization';
import { getOrganizations } from 'src/app/graphql/types/getOrganizations';

export const getCompany = createAction(
  '[Companies] Get Company',
  props<{id: string}>()
);

export const getCompanySuccess = createAction(
  '[Companies] Get Company Success',
  props<{ data: getOrganization }>()
);

export const getCompanyFailure = createAction(
  '[Companies] Get Company Failure',
  props<{ error: ApolloError }>()
);

export const setCompany = createAction(
  '[Companies] Set Company',
  props<{ data: PartialDeep<Company> }>()
);

export const updateCompany = createAction(
  '[Companies] Update Company'
);

export const updateCompanySuccess = createAction(
  '[Companies] Update Company Success',
  props<{ id: string }>()
);

export const updateCompanyFailure = createAction(
  '[Companies] Update Company Failure',
  props<{ error: ApolloError }>()
);

export const setActiveCulture = createAction(
  '[Companies] Set Active Culture',
  props<{ id: string, culture: string }>()
);

export const getCompanies = createAction(
  '[Companies] Get Companies',
  props<{count?: number, cursor?: string, sort?: string, searchPhrase?: string}>()
);

export const getCompaniesSuccess = createAction(
  '[Companies] Get Companies Success',
  props<{ data: getOrganizations }>()
);

export const getCompaniesFailure = createAction(
  '[Companies] Get Companies Failure',
  props<{ error: ApolloError }>()
);
