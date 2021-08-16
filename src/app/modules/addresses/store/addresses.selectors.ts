import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAddresses from './addresses.reducer';

export const selectAddressesState = createFeatureSelector<fromAddresses.State>(
  fromAddresses.addressesFeatureKey
);

export const selectOrganizationAddresses = createSelector(
  selectAddressesState,
  (state: fromAddresses.State) => state.addresses
);
