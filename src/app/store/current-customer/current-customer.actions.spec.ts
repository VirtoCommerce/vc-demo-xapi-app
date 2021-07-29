import * as fromCurrentCustomer from './current-customer.actions';

describe('getCurrentCustomer', () => {
  it('should return an action', () => {
    expect(fromCurrentCustomer.getCurrentCustomer().type).toBe('[CurrentCustomer] Get CurrentCustomer');
  });
});
