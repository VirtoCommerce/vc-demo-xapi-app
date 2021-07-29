import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCurrentCustomer from './current-customer.reducer';

export const selectCurrentCustomerState = createFeatureSelector<fromCurrentCustomer.State>(
  fromCurrentCustomer.currentCustomerFeatureKey
);
