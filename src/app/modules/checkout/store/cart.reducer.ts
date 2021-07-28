import { createReducer, on } from '@ngrx/store';
import { PartialDeep } from 'type-fest';
import { Cart } from 'src/app/models/cart.model';
import * as CartActions from './cart.actions';

export const cartFeatureKey = 'cart';

export interface State {
  cart: PartialDeep<Cart> | null;
}

export const initialState: State = {
  cart: null,
};

export const reducer = createReducer(
  initialState,
  on(CartActions.getCart, (state): State => state),
  on(CartActions.getCartSuccess, (state, action): State => ({
    ...state,
    cart: {
      id: action.data?.cart?.id ?? '',
      comment: action.data.cart?.comment ?? '',
    },
  })),
  on(CartActions.getCartFailure, (state): State => state)
);
