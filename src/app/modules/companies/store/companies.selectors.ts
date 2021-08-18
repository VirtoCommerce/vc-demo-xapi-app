import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Company } from 'src/app/models/company.model';
import * as fromCompanies from './companies.reducer';

export const selectCompaniesState = createFeatureSelector<fromCompanies.State>(
  fromCompanies.companiesFeatureKey
);

export const selectSelectedCompany = createSelector(
  selectCompaniesState,
  (state: fromCompanies.State) => state.selectedCompany
);

export const selectEditedCompany = createSelector(
  selectCompaniesState,
  (state: fromCompanies.State) => state.editCompany as Company
);
