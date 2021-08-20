import { createReducer, on } from '@ngrx/store';
import { PartialDeep } from 'type-fest';
import { Cart } from 'src/app/models/cart.model';
import * as CartActions from './cart.actions';

export const cartFeatureKey = 'cart';

export interface State {
  cart: PartialDeep<Cart>;
  billingAddressAsShipping: boolean;
}

export const initialState: State = {
  cart: {
    dynamicProperties: [],
    coupons: [],
    items: [],
    shipments: [],
    payments: [],
    availableShippingMethods: [],
  },
  billingAddressAsShipping: true,
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
      items: customMap(action?.data?.cart?.items, x => ({ ...x })),
      shipments: customMap(action?.data?.cart?.shipments, x => ({
        ...x,
        deliveryAddress: x.deliveryAddress ? { ...x.deliveryAddress } : undefined,
      })),
      payments: customMap(action?.data?.cart?.payments, x => ({
        ...x,
        billingAddress: x.billingAddress ? { ...x.billingAddress } : undefined,
      })),
      availableShippingMethods: customMap(action?.data?.cart?.availableShippingMethods, x => ({ ...x })),
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
    (state, action): State => {
      return ({
        ...state,
        cart: {
          ...state.cart,
          ...action?.data,
          items: state.cart.items
            ? state.cart.items.map(item => {
              const discountedItem = action?.data?.items?.find(x => x && item ? x.id === item.id : false);
              if (discountedItem) {
                item = { ...item };
                item.extendedPrice = discountedItem.extendedPrice;
                item.placedPrice = discountedItem.placedPrice;
              }

              return item;
            })
            : [],
          coupons: customMap(action?.data?.coupons, x => ({ ...x })),
        },
      });
    }
  ),
  on(
    CartActions.changeCartItemQuantitySuccess,
    CartActions.removeCartItemSuccess,
    (state, action): State => ({
      ...state,
      cart: {
        ...state.cart,
        ...action?.data,
        items: customMap(action?.data?.items, x => ({ ...x })),
      },
    })
  ),
  on(CartActions.addOrUpdateShipmentSuccess, (state, action): State => ({
    ...state,
    cart: {
      ...state.cart,
      total: action?.shipmentResult?.total,
      shippingTotal: action?.shipmentResult?.shippingTotal,
      shipments: customMap(action?.shipmentResult?.shipments, x => ({
        ...x,
        deliveryAddress: x.deliveryAddress ? { ...x.deliveryAddress } : undefined,
      })),
    },
  })),
  on(CartActions.addOrUpdatePaymentSuccess, (state, action): State => ({
    ...state,
    cart: {
      ...state.cart,
      payments: customMap(action?.payments, x => ({
        ...x,
        billingAddress: x.billingAddress ? { ...x.billingAddress } : undefined,
      })),
    },
  })),
  on(CartActions.setCartUserId, (state): State => state),
  on(CartActions.setBillingAsShipping, ((state, action): State => ({
    ...state,
    billingAddressAsShipping: action.value,
  })))
);

export function customMap<T, P>(input: readonly (T | null)[] | null | undefined, callback: (value: T) => P): P[] {
  return input?.filter(x => x != null)
    .map(x => x as T)
    .map<P>(x => {
      return callback(x);
    }) ?? [];
}

