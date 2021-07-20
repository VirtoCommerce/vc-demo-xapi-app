import { createFeatureSelector } from '@ngrx/store';
import * as fromCountries from './countries.reducer';

export const selectCountriesState = createFeatureSelector<fromCountries.State>(
  fromCountries.countriesFeatureKey
);
