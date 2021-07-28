import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLogin from './login.reducer';

export const selectLogintate = createFeatureSelector<fromLogin.State>(
  fromLogin.loginFeatureKey
);
