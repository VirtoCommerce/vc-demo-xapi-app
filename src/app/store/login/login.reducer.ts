import { createReducer, on } from '@ngrx/store';
import * as LoginActions from './login.actions';

export const loginFeatureKey = 'login';

export interface State {
  token: string | null,
  error: string,
}

export const initialState: State = {
  token: null,
  error: '',
};

export const reducer = createReducer(
  initialState,

  on(LoginActions.login, (state): State => state),
  on(LoginActions.loginSuccess, (_, action) : State => ({
    token: action.token,
    error: '',
  })),
  on(LoginActions.loginRestore, (_, action) : State => ({
    token: action.token,
    error: '',
  })),
  on(LoginActions.loginFailure, (state, action) : State => ({
    ...state,
    error: action.error,
  })),
  on(LoginActions.logout, (): State => ({ ...initialState }))

);

