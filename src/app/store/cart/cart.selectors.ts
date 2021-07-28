import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Cart } from 'src/app/models/cart.model';
import * as fromCart from './cart.reducer';

export const selectCartState = createFeatureSelector<fromCart.State>(
  fromCart.cartFeatureKey
);

export const selectCart = createSelector(
  selectCartState,
  (state: fromCart.State) => state.cart as Cart
);

export const selectUserId = createSelector(
  selectCartState,
  (state: fromCart.State) => state.userId
);
