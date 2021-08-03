import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Login] Login',
  props<{ userName: string, password: string }>()
);

export const loginSuccess = createAction(
  '[Login] Login Success',
  props<{ token: string }>()
);

export const loginRestore = createAction(
  '[Login] Login Restore',
  props<{ token: string }>()
);

export const loginFailure = createAction(
  '[Login] Login Failure',
  props<{ error: string }>()
);

export const logout = createAction(
  '[Login] Logout'
);
