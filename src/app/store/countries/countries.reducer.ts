import { createReducer, on } from '@ngrx/store';
import { getCountries_countries } from 'src/app/graphql/types/getCountries';
import { Country } from 'src/app/models/country.model';
import * as CountriesActions from './countries.actions';

export const countriesFeatureKey = 'countries';

export type State = Country[] | null;

export const initialState: State = [];

export const reducer = createReducer<State>(
  initialState,

  on(CountriesActions.getCountries, (state): State => state),
  on(CountriesActions.getCountriesSuccess, (_, action): State => action.data.countries
    ?.filter(country => country != null)
    .map(country => country as getCountries_countries)
    .map(country => ({
      id: country.id,
      name: country.name,
    })) ?? null),
  on(CountriesActions.getCountriesFailure, (state): State => state)

);

