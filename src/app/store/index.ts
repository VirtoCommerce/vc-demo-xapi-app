import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromEnvironmentVariables from '../modules/environment-variables/store/environment-variables.reducer';

export interface State {

  [fromEnvironmentVariables.environmentVariablesFeatureKey]: fromEnvironmentVariables.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromEnvironmentVariables.environmentVariablesFeatureKey]: fromEnvironmentVariables.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
