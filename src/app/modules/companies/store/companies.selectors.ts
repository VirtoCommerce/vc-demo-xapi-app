import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCompanies from './companies.reducer';

export const selectCompaniesState = createFeatureSelector<fromCompanies.State>(
  fromCompanies.companiesFeatureKey
);

export const selectSelectedCompany = createSelector(
  selectCompaniesState,
  (state: fromCompanies.State) => state.company
);
