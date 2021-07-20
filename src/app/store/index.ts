import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCountries from './countries/countries.reducer';

export interface State {
  [fromCountries.countriesFeatureKey]: fromCountries.State;
}

export const reducers: ActionReducerMap<State> = {  
  [fromCountries.countriesFeatureKey]: fromCountries.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
