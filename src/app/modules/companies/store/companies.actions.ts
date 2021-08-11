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
  '[Companies] Get Companiess Success',
  props<{ data: getOrganization }>()
);

export const getCompanyFailure = createAction(
  '[Companies] Get Companiess Failure',
  props<{ error: ApolloError }>()
);

export const updateCompany = createAction(
  '[Companies] Get Companiess',
  props<{ data:EditCompany }>()
);

export const updateCompanySuccess = createAction(
  '[Companies] Get Companiess Success',
  props<{ data: updateOrganization | null | undefined }>()
);

export const updateCompanyFailure = createAction(
  '[Companies] Get Companiess Failure',
  props<{ error: ApolloError }>()
);
