import { DynamicFormOption } from '@ng-dynamic-forms/core';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Company } from 'src/app/models/company.model';
import { COMPANY_DYNAMIC_PROPERTIES } from '../constants/dynamic-properties';
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

export const selectDictionaryOptions = createSelector(
  selectCompaniesState,
  (state: fromCompanies.State) => state.dictionaryItems
    ?.[COMPANY_DYNAMIC_PROPERTIES.shortTextDictionary]
    .map(
      item => new DynamicFormOption({
        label: item.value,
        value: item.valueId,
      })
    )
);


export const selectCurrentCulture = createSelector(
  selectCompaniesState,
  (state: fromCompanies.State) => state.activeCulture
);

export const selectCultureOptions = createSelector(
  selectCompaniesState,
  (state: fromCompanies.State): string[] | null => state.availableCultures.map(culture => culture ?? null)
);
