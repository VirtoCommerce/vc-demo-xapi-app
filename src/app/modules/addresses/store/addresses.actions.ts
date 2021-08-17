import { ApolloError } from '@apollo/client/core';
import { createAction, props } from '@ngrx/store';
import { getOrganizationAddresses as getOrganizationAddressesQuery }
  from 'src/app/graphql/types/getOrganizationAddresses';
import { updateMemberAddresses } from 'src/app/graphql/types/updateMemberAddresses';
import { Address } from 'src/app/models/address.model';

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

export const setSelectedAddress = createAction(
  '[Addresses] Set Selected Address',
  props<{ address: Address }>()
);

export const setAddress = createAction(
  '[Addresses] Set Address',
  props<{ data: Address }>()
);

export const updateAddress = createAction(
  '[Addresses] Update Address',
  props<{ id: string }>()
);

export const updateAddressSuccess = createAction(
  '[Addresses] Update Address Success',
  props<{ data: updateMemberAddresses | null | undefined }>()
);

export const updateAddressFailure = createAction(
  '[Addresses] Update Address Failure',
  props<{ error: ApolloError }>()
);
