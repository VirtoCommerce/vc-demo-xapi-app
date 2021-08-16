import * as fromCompanies from './companies.reducer';
import { selectCompaniesState } from './companies.selectors';

describe('Companies Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCompaniesState({
      [fromCompanies.companiesFeatureKey]: fromCompanies.initialState,
    });

    expect(result).toEqual({
      selectedCompany: null,
      editCompany: null,
    });
  });
});
