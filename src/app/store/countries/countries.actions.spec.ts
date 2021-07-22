import * as fromCountries from './countries.actions';

describe('getCountries', () => {
  it('should return an action', () => {
    expect(fromCountries.getCountries().type).toBe('[Countries] Get Countries');
  });
});
