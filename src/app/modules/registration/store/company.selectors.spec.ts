import * as fromCompany from './company.reducer';
import { selectCompanyState } from './company.selectors';

describe('Company Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCompanyState({
      [fromCompany.companyFeatureKey]: {},
    });

    expect(result).toEqual({
      company: null,
      succeeded: null,
    });
  });
});
