import * as fromAddresses from './addresses.actions';

describe('getAddressess', () => {
  it('should return an action', () => {
    expect(fromAddresses.getAddressess().type).toBe('[Addresses] Get Addressess');
  });
});
