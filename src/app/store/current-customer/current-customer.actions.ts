import { getCurrentCustomer as getCurrentCustomerQuery } from 'src/app/graphql/types/getCurrentCustomer';
import { createAction, props } from '@ngrx/store';
import { ApolloError } from '@apollo/client/core';

export const getCurrentCustomer = createAction(
  '[CurrentCustomer] Get CurrentCustomer'
);

export const getCurrentCustomerSuccess = createAction(
  '[CurrentCustomer] Get CurrentCustomer Success',
  props<{ data: getCurrentCustomerQuery }>()
);

export const getCurrentCustomerFailure = createAction(
  '[CurrentCustomer] Get CurrentCustomer Failure',
  props<{ error: ApolloError }>()
);
