import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCountries from './countries/countries.reducer';
import * as fromCompany from '../modules/registration/store/company.reducer';

export interface State {
  [fromCountries.countriesFeatureKey]: fromCountries.State;
  [fromCompany.companyFeatureKey]: fromCompany.State;
}

export const reducers: ActionReducerMap<State> = {  
  [fromCountries.countriesFeatureKey]: fromCountries.reducer,
[fromCompany.companyFeatureKey]: fromCompany.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
