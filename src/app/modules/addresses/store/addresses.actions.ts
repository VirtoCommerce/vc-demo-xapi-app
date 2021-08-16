import { ApolloError } from '@apollo/client/core';
import { createAction, props } from '@ngrx/store';
import { getOrganizationAddresses as getOrganizationAddressesQuery }
  from 'src/app/graphql/types/getOrganizationAddresses';

export const getAddressess = createAction(
  '[Addresses] Get Addressess',
  props<{ id: string, count?: number, cursor?: string, sort?: string}>()
);

export const getAddressessSuccess = createAction(
  '[Addresses] Get Addressess Success',
  props<{ data: getOrganizationAddressesQuery }>()
);

export const getAddressessFailure = createAction(
  '[Addresses] Get Addressess Failure',
  props<{ error: ApolloError }>()
);
