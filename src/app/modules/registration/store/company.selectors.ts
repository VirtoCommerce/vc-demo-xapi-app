import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CompanyRegistration } from 'src/app/models/company-registration.model';
import * as fromCompany from './company.reducer';

export const selectCompanyState = createFeatureSelector<fromCompany.State>(
  fromCompany.companyFeatureKey
);

export const selectCompanyRegistration = createSelector(
  selectCompanyState,
  (state: fromCompany.State) => state.companyRegistration as CompanyRegistration
);

export const selectCompanyRegistrationResult = createSelector(
  selectCompanyState,
  (state: fromCompany.State) => state.succeeded
);
