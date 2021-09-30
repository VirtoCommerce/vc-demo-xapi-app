import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CompanyMember, CompanyRegistration } from 'src/app/models/registration.model';
import * as fromCompany from './registration.reducer';

export const selectRegistrationState = createFeatureSelector<fromCompany.State>(
  fromCompany.registrationFeatureKey
);

export const selectCompanyRegistration = createSelector(
  selectRegistrationState,
  (state: fromCompany.State) => state.companyRegistration as CompanyRegistration
);

export const selectRegistrationByInvitation = createSelector(
  selectRegistrationState,
  (state: fromCompany.State) => state.registrationByInvitation as CompanyMember
);

export const selectRegistrationByInvitationError = createSelector(
  selectRegistrationState,
  (state: fromCompany.State) => state.registrationByInvitationError
);
