import { ApolloError } from '@apollo/client/errors';
import { createAction, props } from '@ngrx/store';
import { PartialDeep } from 'type-fest';

import { Cart } from 'src/app/models/cart.model';
import { cart } from 'src/app/graphql/types/cart';

import { updateCartDynamicProperties_updateCartDynamicProperties_dynamicProperties }
  from 'src/app/graphql/types/updateCartDynamicProperties';
import { addCartCoupon_addCoupon_coupons } from 'src/app/graphql/types/addCartCoupon';
import { removeCartCoupon_removeCoupon_coupons } from 'src/app/graphql/types/removeCartCoupon';

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

export const updateCartComment = createAction(
  '[Cart] Update Cart Comment',
  props<{ comment: string | null }>()
);

export const updateCartPurchaseNumber = createAction(
  '[Cart] Update Cart Purchase Number',
  props<{ purchaseNumber?: string | null }>()
);

export const updateCartDynamicProperties = createAction(
  '[Cart] Update Cart DynamicProperties',
  props<{ dynamicProperties?:
    ReadonlyArray<(updateCartDynamicProperties_updateCartDynamicProperties_dynamicProperties | null)> | null }>()
);

export const addCartCoupon = createAction(
  '[Cart] Add Cart Coupon',
  props<{ coupon: string | null }>()
);

export const addCartCouponSuccess = createAction(
  '[Cart] Add Cart Coupon Success',
  props<{ coupons?:
    ReadonlyArray<(addCartCoupon_addCoupon_coupons | null)> | null }>()
);

export const removeCartCoupon = createAction(
  '[Cart] Remove Cart Coupon',
  props<{ coupon: string | null }>()
);

export const removeCartCouponSuccess = createAction(
  '[Cart] Remove Cart Coupon Success',
  props<{ coupons?:
    ReadonlyArray<(removeCartCoupon_removeCoupon_coupons | null)> | null }>()
);

export const updateStoredCart = createAction(
  '[Cart] Update Cart In Store',
  props<{ data: PartialDeep<Cart> }>()
);

export const setCartUserId = createAction(
  '[Cart] Set Cart UserId',
  props<{ userId: string }>()
);
