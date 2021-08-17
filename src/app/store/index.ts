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
import * as fromLogin from './login/login.reducer';
import * as fromCurrentCustomer from './current-customer/current-customer.reducer';
import * as fromAddresses from '../modules/addresses/store/addresses.reducer';
import * as fromCompanies from '../modules/companies/store/companies.reducer';

export interface State {
[fromCountries.countriesFeatureKey]: fromCountries.State;
[fromCompany.companyRegistrationFeatureKey]: fromCompany.State;
[fromCart.cartFeatureKey]: fromCart.State
[fromSectors.sectorsFeatureKey]: fromSectors.State;
[fromLogin.loginFeatureKey]: fromLogin.State;
[fromCurrentCustomer.currentCustomerFeatureKey]: fromCurrentCustomer.State;
[fromAddresses.addressesFeatureKey]: fromAddresses.State;
[fromCompanies.companiesFeatureKey]: fromCompanies.State;
}

export const reducers: ActionReducerMap<State> = {
[fromCountries.countriesFeatureKey]: fromCountries.reducer,
[fromCompany.companyRegistrationFeatureKey]: fromCompany.reducer,
[fromCart.cartFeatureKey]: fromCart.reducer,
[fromSectors.sectorsFeatureKey]: fromSectors.reducer,
[fromLogin.loginFeatureKey]: fromLogin.reducer,
[fromCurrentCustomer.currentCustomerFeatureKey]: fromCurrentCustomer.reducer,
[fromAddresses.addressesFeatureKey]: fromAddresses.reducer,
[fromCompanies.companiesFeatureKey]: fromCompanies.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
