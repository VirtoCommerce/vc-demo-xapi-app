import { createFeatureSelector } from '@ngrx/store';
import * as fromLogin from './login.reducer';

export const selectLoginState = createFeatureSelector<fromLogin.State>(
  fromLogin.loginFeatureKey
);
