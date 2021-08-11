import { PartialDeep } from 'type-fest';
import { updateOrganization } from './../../../graphql/types/updateOrganization';
import { EditCompany } from './../../../models/edit-company.model';
import { ApolloError } from '@apollo/client/core';
import { createAction, props } from '@ngrx/store';
import { getOrganization } from 'src/app/graphql/types/getOrganization';

export const getCompany = createAction(
  '[Companies] Get Companiess',
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
  props<{ data: PartialDeep<EditCompany> }>()
);

export const updateCompany = createAction(
  '[Companies] Update Company'
);

export const updateCompanySuccess = createAction(
  '[Companies] Update Company Success',
  props<{ data: updateOrganization | null | undefined }>()
);

export const updateCompanyFailure = createAction(
  '[Companies] Update Company Failure',
  props<{ error: ApolloError }>()
);
