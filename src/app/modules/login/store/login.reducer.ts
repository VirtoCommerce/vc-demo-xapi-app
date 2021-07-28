import { createReducer, on } from '@ngrx/store';
import * as LoginActions from './login.actions';

export const loginFeatureKey = 'login';

export interface State {
  token: string | null,
  error: string | null,
}

export const initialState: State = {
  token: null,
  error: null,
};

export const reducer = createReducer(
  initialState,

  on(LoginActions.login, (state): State => state),
  on(LoginActions.loginSuccess, (_, action) : State => ({
    token: action.token,
    error: null,
  })),
  on(LoginActions.loginFailure, (state, action) : State => ({
    ...state,
    error: action.error,
  })),
  on(LoginActions.logout, (): State => ({ ...initialState }))

);

