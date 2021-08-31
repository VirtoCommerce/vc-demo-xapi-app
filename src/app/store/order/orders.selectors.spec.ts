import * as fromOrders from './orders.reducer';
import { selectOrdersState } from './orders.selectors';

describe('Orders Selectors', () => {
  it('should select the feature state', () => {
    const result = selectOrdersState({
      [fromOrders.ordersFeatureKey]: fromOrders.initialState,
    });

    expect(result).toEqual({ orders: null });
  });
});
