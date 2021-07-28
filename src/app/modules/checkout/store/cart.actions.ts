import { ApolloError } from '@apollo/client/errors';
import { createAction, props } from '@ngrx/store';
import { cart } from 'src/app/graphql/types/cart';

export const getCart = createAction(
  '[Cart] Get Cart'
);

export const getCartSuccess = createAction(
  '[Cart] Get Cart Success',
  props<{ data: cart }>()
);

export const getCartFailure = createAction(
  '[Cart] Get Cart Failure',
  props<{ error: ApolloError }>()
);

/*
 * Export const createCart = createAction(
 *   '[Cart] Create Cart'
 * );
 */

/*
 * Export const setCart = createAction(
 *   '[Cart] Set Cart',
 *   props<{ data: PartialDeep<Cart> }>()
 * );
 */
