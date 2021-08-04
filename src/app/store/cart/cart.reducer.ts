import { createReducer, on } from '@ngrx/store';
import { PartialDeep } from 'type-fest';
import { Cart } from 'src/app/models/cart.model';
import * as CartActions from './cart.actions';

export const cartFeatureKey = 'cart';

export interface State {
  cart: PartialDeep<Cart>;
}

export const initialState: State = {
  cart: {
    items: [],
    dynamicProperties: [],
    coupons: [],
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
      dynamicProperties: customMap(action?.data?.cart?.dynamicProperties, x => ({ ...x })),
      coupons: customMap(action?.data?.cart?.coupons, x => ({ ...x })),
    },
  })),
  on(CartActions.getCartFailure, (state): State => state),
  on(CartActions.updateCartDynamicProperties, (state, action): State => ({
    ...state,
    cart: {
      ...state.cart,
      dynamicProperties: customMap(action?.dynamicProperties, x => ({ ...x })),
    },
  })),
  on(
    CartActions.addCartCouponSuccess,
    CartActions.removeCartCouponSuccess,
    (state, action): State => ({
      ...state,
      cart: {
        ...state.cart,
        ...action?.data,
        coupons: customMap(action?.data?.coupons, x => ({ ...x })),
      },
    })
  ),
  on(CartActions.setCartUserId, (state): State => state)
);

export function customMap<T, P>(input: readonly (T | null)[] | null | undefined, callback: (value: T) => P): P[] {
  return input?.filter(x => x != null)
    .map(x => x as T)
    .map<P>(x => {
      return callback(x);
    }) ?? [];
}
