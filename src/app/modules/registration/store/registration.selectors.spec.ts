import * as fromCompany from './registration.reducer';
import { selectRegistrationState } from './registration.selectors';

describe('Company Selectors', () => {
  it('should select the feature state', () => {
    const result = selectRegistrationState({
      [fromCompany.registrationFeatureKey]: fromCompany.initialState,
    });

    expect(result).toEqual({
      companyRegistration: null,
      companyRegistrationSucceeded: null,
      registrationByInvitation: null,
      registrationByInvitationSucceeded: null,
    });
  });
});
