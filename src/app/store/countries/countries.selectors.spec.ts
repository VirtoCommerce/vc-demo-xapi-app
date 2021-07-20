import * as fromCountries from './countries.reducer';
import { selectCountriesState } from './countries.selectors';

describe('Countries Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCountriesState({
      [fromCountries.countriesFeatureKey]: [],
    });

    expect(result).toEqual([]);
  });
});
