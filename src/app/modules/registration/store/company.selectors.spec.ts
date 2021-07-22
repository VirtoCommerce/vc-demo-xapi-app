import * as fromCompany from './company.reducer';
import { selectCompanyState } from './company.selectors';

describe('Company Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCompanyState({
      [fromCompany.companyFeatureKey]: {
        companyRegistration: null,
        succeeded: null,
      },
    });

    expect(result).toEqual({
      companyRegistration: null,
      succeeded: null,
    });
  });
});
