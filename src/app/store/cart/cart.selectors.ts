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
