import { ApolloError } from '@apollo/client/core';
import { createAction, props } from '@ngrx/store';
import { orders as loadOrdersQuery } from 'src/app/graphql/types/orders';

export const loadOrders = createAction(
  '[Orders] Load Orders',
  props<{ currentCustomerId: string, filter?: string, count?: number, cursor: string, sort?: string}>()
);

export const loadOrdersSuccess = createAction(
  '[Orders] Load Orders Success',
  props<{ data: loadOrdersQuery }>()
);

export const loadOrdersFailure = createAction(
  '[Orders] Load Orders Failure',
  props<{ error: ApolloError }>()
);
