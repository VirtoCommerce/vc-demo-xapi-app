import * as fromAddresses from './addresses.reducer';
import { selectAddressesState } from './addresses.selectors';

describe('Addresses Selectors', () => {
  it('should select the feature state', () => {
    const result = selectAddressesState({
      [fromAddresses.addressesFeatureKey]: fromAddresses.initialState,
    });

    expect(result).toEqual({
      addresses: null,
      selectedAddress: null,
      editAddress: null,
    });
  });
});
