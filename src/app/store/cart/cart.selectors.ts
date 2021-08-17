import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Cart, CartItem, Coupon, DynamicProperty } from 'src/app/models/cart.model';
import * as fromCart from './cart.reducer';

export const selectCartState = createFeatureSelector<fromCart.State>(
  fromCart.cartFeatureKey
);

export const selectCart = createSelector(
  selectCartState,
  (state: fromCart.State) => state.cart as Cart
);

export const selectIsBillingAddressAsShipping = createSelector(
  selectCartState,
  (state: fromCart.State) => state.billingAddressAsShipping
);

export const selectShippingAddress = createSelector(
  selectCartState,
  (state: fromCart.State) => state.cart?.shipments?.length
    ? state.cart.shipments[0]?.deliveryAddress ?? null
    : null
);

export const selectBillingAddress = createSelector(
  selectCartState,
  (state: fromCart.State) => state.cart?.payments?.length
    ? state.cart.payments[0]?.billingAddress ?? null
    : null
);

export const selectDynamicCartProperties = createSelector(
  selectCartState,
  (state: fromCart.State) => state.cart.dynamicProperties as DynamicProperty[]
);

export const selectCoupons = createSelector(
  selectCartState,
  (state: fromCart.State) => state.cart.coupons as Coupon[]
);

export const selectItems = createSelector(
  selectCartState,
  (state: fromCart.State) => state.cart.items as CartItem[]
);
