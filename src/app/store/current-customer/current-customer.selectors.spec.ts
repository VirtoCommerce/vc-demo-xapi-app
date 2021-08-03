import * as fromCurrentCustomer from './current-customer.reducer';
import { selectCurrentCustomerState } from './current-customer.selectors';

describe('CurrentCustomer Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCurrentCustomerState({
      [fromCurrentCustomer.currentCustomerFeatureKey]: fromCurrentCustomer.initialState,
    });

    expect(result).toEqual({ user: null });
  });
});
