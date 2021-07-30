import * as fromLogin from './login.reducer';
import { selectLoginState } from './login.selectors';

describe('Login Selectors', () => {
  it('should select the feature state', () => {
    const result = selectLoginState({
      [fromLogin.loginFeatureKey]: fromLogin.initialState,
    });

    expect(result).toEqual({
      token: null,
      error: '',
    });
  });
});
