import { createReducer, on } from '@ngrx/store';
import * as EnvironmentVariablesActions from './environment-variables.actions';

export const environmentVariablesFeatureKey = 'environmentVariables';

export interface State {
  platformUrl?: string
}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

  on(EnvironmentVariablesActions.loadEnvironmentVariables, (state): State => state),
  on(EnvironmentVariablesActions.loadEnvironmentVariablesSuccess, (state, action): State => ({ ...state, platformUrl: action.data.platformUrl })),
  on(EnvironmentVariablesActions.loadEnvironmentVariablesFailure, (state): State => state),

);

