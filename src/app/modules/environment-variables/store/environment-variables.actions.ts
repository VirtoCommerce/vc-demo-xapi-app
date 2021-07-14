import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { EnvironmentVariables } from './environment-variables.payload';

export const loadEnvironmentVariables = createAction(
  '[EnvironmentVariables] Load EnvironmentVariables'
);

export const loadEnvironmentVariablesSuccess = createAction(
  '[EnvironmentVariables] Load EnvironmentVariables Success',
  props<{ data: EnvironmentVariables }>()
);

export const loadEnvironmentVariablesFailure = createAction(
  '[EnvironmentVariables] Load EnvironmentVariables Failure',
  props<{ error: HttpErrorResponse }>()
);
