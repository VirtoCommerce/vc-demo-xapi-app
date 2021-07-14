import { createFeatureSelector } from '@ngrx/store';
import * as fromEnvironmentVariables from './environment-variables.reducer';

export const selectEnvironmentVariablesState = createFeatureSelector<fromEnvironmentVariables.State>(
  fromEnvironmentVariables.environmentVariablesFeatureKey
);
