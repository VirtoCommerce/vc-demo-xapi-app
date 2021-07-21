import * as fromCompany from './company.reducer';
import { selectCompanyState } from './company.selectors';

describe('Company Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCompanyState({
      [fromCompany.companyFeatureKey]: {
        company: null,
        succeeded: null,
      },
    });

    expect(result).toEqual({
      company: null,
      succeeded: null,
    });
  });
});
