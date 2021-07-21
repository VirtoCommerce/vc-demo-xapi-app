import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Company } from './company.payload';
import * as fromCompany from './company.reducer';

export const selectCompanyState = createFeatureSelector<fromCompany.State>(
  fromCompany.companyFeatureKey
);

export const selectCompany = createSelector(
  selectCompanyState,
  (state: fromCompany.State) => state.company as Company
);

export const selectRegistrationResult = createSelector(
  selectCompanyState,
  (state: fromCompany.State) => state.succeeded
);
