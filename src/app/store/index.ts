import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCountries from './countries/countries.reducer';
import * as fromCompany from '../modules/registration/store/registration.reducer';
import * as fromCart from './cart/cart.reducer'
import * as fromSectors from './sectors/sectors.reducer';
import * as fromLogin from './login/login.reducer';
import * as fromCurrentCustomer from './current-customer/current-customer.reducer';
import * as fromAddresses from '../modules/addresses/store/addresses.reducer';
import * as fromCompanies from '../modules/companies/store/companies.reducer';
import * as fromRegions from './regions/regions.reducer';
import * as fromOrders from './order/orders.reducer';
import * as fromMembers from '../modules/members/store/members.reducer';

export interface State {
[fromCountries.countriesFeatureKey]: fromCountries.State;
[fromCompany.registrationFeatureKey]: fromCompany.State;
[fromCart.cartFeatureKey]: fromCart.State
[fromSectors.sectorsFeatureKey]: fromSectors.State;
[fromLogin.loginFeatureKey]: fromLogin.State;
[fromCurrentCustomer.currentCustomerFeatureKey]: fromCurrentCustomer.State;
[fromAddresses.addressesFeatureKey]: fromAddresses.State;
[fromCompanies.companiesFeatureKey]: fromCompanies.State;
[fromRegions.regionsFeatureKey]: fromRegions.State;
[fromOrders.ordersFeatureKey]: fromOrders.State;
[fromMembers.membersFeatureKey]: fromMembers.State;
}

export const reducers: ActionReducerMap<State> = {
[fromCountries.countriesFeatureKey]: fromCountries.reducer,
[fromCompany.registrationFeatureKey]: fromCompany.reducer,
[fromCart.cartFeatureKey]: fromCart.reducer,
[fromSectors.sectorsFeatureKey]: fromSectors.reducer,
[fromLogin.loginFeatureKey]: fromLogin.reducer,
[fromCurrentCustomer.currentCustomerFeatureKey]: fromCurrentCustomer.reducer,
[fromAddresses.addressesFeatureKey]: fromAddresses.reducer,
[fromCompanies.companiesFeatureKey]: fromCompanies.reducer,
[fromRegions.regionsFeatureKey]: fromRegions.reducer,
[fromOrders.ordersFeatureKey]: fromOrders.reducer,
[fromMembers.membersFeatureKey]: fromMembers.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
