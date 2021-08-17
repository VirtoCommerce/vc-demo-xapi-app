import { ApolloError } from '@apollo/client/errors';
import { createAction, props } from '@ngrx/store';
import { PartialDeep } from 'type-fest';

import { Cart, CartAddress } from 'src/app/models/cart.model';
import { cart } from 'src/app/graphql/types/cart';

import { updateCartDynamicProperties_updateCartDynamicProperties_dynamicProperties as dynamicPropertiesUpdateResult }
  from 'src/app/graphql/types/updateCartDynamicProperties';
import { addCartCoupon_addCoupon as addCouponResult } from 'src/app/graphql/types/addCartCoupon';
import { removeCartCoupon_removeCoupon as removeCouponResult } from 'src/app/graphql/types/removeCartCoupon';
import { changeCartItemQuantity_changeCartItemQuantity as changeCartItemQuantityResult }
  from 'src/app/graphql/types/changeCartItemQuantity';
import { removeCartItem_removeCartItem as removeCartItemResult } from 'src/app/graphql/types/removeCartItem';
import { addOrUpdateCartShipment_addOrUpdateCartShipment_shipments as shipmentResult }
  from 'src/app/graphql/types/addOrUpdateCartShipment';
import { addOrUpdateCartPayment_addOrUpdateCartPayment_payments  as paymentResult }
  from 'src/app/graphql/types/addOrUpdateCartPayment';

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

export const removeCartItemSuccess = createAction(
  '[Cart] Remove CartItem Success',
  props<{ data: removeCartItemResult | null }>()
);

export const changeCartItemQuantity = createAction(
  '[Cart] Change CartItem quantity',
  props<{ lineItemId: string, quantity: number }>()
);

export const changeCartItemQuantitySuccess = createAction(
  '[Cart] Change CartItem quantity Success',
  props<{ data: changeCartItemQuantityResult | null }>()
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
  '[Cart] Update Cart DynamicProperties Success',
  props<{ dynamicProperties?: ReadonlyArray<(dynamicPropertiesUpdateResult | null)> | null }>()
);

export const addCartCoupon = createAction(
  '[Cart] Add Cart Coupon',
  props<{ coupon: string | null }>()
);

export const addCartCouponSuccess = createAction(
  '[Cart] Add Cart Coupon Success',
  props<{ data: addCouponResult | null }>()
);

export const removeCartCoupon = createAction(
  '[Cart] Remove Cart Coupon',
  props<{ coupon: string | null }>()
);

export const removeCartCouponSuccess = createAction(
  '[Cart] Remove Cart Coupon Success',
  props<{ data: removeCouponResult | null }>()
);

export const addOrUpdateShippingAddress = createAction(
  '[Cart] Add Or Update Cart Shipping Address',
  props<{ shipmentId?: string | null, address: CartAddress | null }>()
);

export const addOrUpdateShippingAddressSuccess = createAction(
  '[Cart] Add Or Update Cart Shipping Address Success',
  props<{ shipments?: ReadonlyArray<(shipmentResult | null)> | null }>()
);

export const addOrUpdateBillingAddress = createAction(
  '[Cart] Add Or Update Cart Billing Address',
  props<{ paymentId?: string | null, address: CartAddress | null }>()
);

export const addOrUpdateBillingAddressSuccess = createAction(
  '[Cart] Add Or Update Cart Billing Address Success',
  props<{ payments?: ReadonlyArray<(paymentResult | null)> | null }>()
);

export const updateStoredCart = createAction(
  '[Cart] Update Cart In Store',
  props<{ data: PartialDeep<Cart> }>()
);

export const setBillingAsShipping = createAction(
  '[Cart] Update Billing As Shipping In Store',
  props<{ value: boolean }>()
);

export const setCartUserId = createAction(
  '[Cart] Set Cart UserId',
  props<{ userId: string }>()
);
