import { createReducer, on } from '@ngrx/store';
import { PartialDeep } from 'type-fest';
import { Cart, CartItem } from 'src/app/models/cart.model';
import * as CartActions from './cart.actions';

export const cartFeatureKey = 'cart';

export interface State {
  cart: PartialDeep<Cart> | null;
}

export const initialState: State = {
  cart: {
    items: [],
  },
};

export const reducer = createReducer(
  initialState,
  on(CartActions.updateStoredCart, (state, action): State => ({
    ...state,
    cart: {
      ...state.cart,
      ...action.data,
    },
  })),
  on(CartActions.getCart, (state): State => state),
  on(CartActions.getCartSuccess, (state, action): State => ({
    ...state,
    cart: {
      ...state.cart,
      ...action.data?.cart,
      itemsData: action.data?.cart?.items != null
        ? action.data.cart.items.map(x => x as CartItem)
        : [],
    },
  })),
  on(CartActions.getCartFailure, (state): State => state),
  on(CartActions.setCartUserId, (state): State => state)
);
