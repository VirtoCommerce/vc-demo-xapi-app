import { DynamicFormOption } from '@ng-dynamic-forms/core';
import { createSelector } from '@ngrx/store';
import { selectCountriesState } from 'src/app/store/countries/countries.selectors';
import * as fromCountries from '../../../../store/countries/countries.reducer';

export const selectCountryOptions = createSelector(
  selectCountriesState,
  (state: fromCountries.State): DynamicFormOption<string>[] | null => state?.map(country => new DynamicFormOption({
    label: country.name,
    value: country.id,
  })) ?? null
);
