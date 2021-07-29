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
import * as fromCart from './cart/cart.reducer'
import * as fromSectors from './sectors/sectors.reducer';

export interface State {
  [fromCountries.countriesFeatureKey]: fromCountries.State;
  [fromCompany.companyRegistrationFeatureKey]: fromCompany.State;
  [fromCart.cartFeatureKey]: fromCart.State
  [fromSectors.sectorsFeatureKey]: fromSectors.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromCountries.countriesFeatureKey]: fromCountries.reducer,
  [fromCompany.companyRegistrationFeatureKey]: fromCompany.reducer,
  [fromCart.cartFeatureKey]: fromCart.reducer,
  [fromSectors.sectorsFeatureKey]: fromSectors.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
