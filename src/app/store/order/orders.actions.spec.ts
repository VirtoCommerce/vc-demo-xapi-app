import * as fromOrders from './orders.actions';

describe('loadOrders', () => {
  it('should return an action', () => {
    expect(fromOrders.loadOrders({
      currentCustomerId: '',
      cursor: '',
    }).type).toBe('[Orders] Load Orders');
  });
});
