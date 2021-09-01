import { createReducer, on } from '@ngrx/store';
import { customMap } from 'src/app/helpers/custom-map';

import { OrderRecord } from 'src/app/models/order.model';
import * as OrdersActions from './orders.actions';

export const ordersFeatureKey = 'orders';

export interface State {
  orders: {
    items?: OrderRecord[] | null,
    totalCount?: number | null
  } | null,
}

export const initialState: State = {
  orders: null,
};

export const reducer = createReducer(
  initialState,

  on(OrdersActions.loadOrders, (state) : State => state),
  on(OrdersActions.loadOrdersSuccess, (state, action): State => ({
    ...state,
    orders: {
      items: customMap(action?.data?.orders?.items, x => ({
        ...x,
        dynamicProperties: customMap(x.dynamicProperties, y => ({ ...y })),
      })),
      totalCount: action.data.orders?.totalCount,
    },
  })),
  on(OrdersActions.loadOrdersFailure, (state): State => ({
    ...state,
    orders: null,
  }))

);

