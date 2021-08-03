import { ApolloError } from '@apollo/client/errors';
import { createAction, props } from '@ngrx/store';
import { cart } from 'src/app/graphql/types/cart';
import { Cart } from 'src/app/models/cart.model';
import { PartialDeep } from 'type-fest';

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

export const removeCartItem = createAction(
  '[Cart] Remove CartItem',
  props<{ lineItemId: string }>()
);

export const updateCartComment = createAction(
  '[Cart] Update Cart Comment',
  props<{ comment: string | null }>()
);

export const updateCartCommentSuccess = createAction(
  '[Cart] Update Cart Comment Success',
  props<{ comment: string | null }>()
);

export const updateCartCommentFailure = createAction(
  '[Cart] Update Cart Comment Failure',
  props<{ error: ApolloError }>()
);

export const updateStoredCart = createAction(
  '[Cart] Update Cart In Store',
  props<{ data: PartialDeep<Cart> }>()
);

export const setCartUserId = createAction(
  '[Cart] Set Cart UserId',
  props<{ userId: string }>()
);

