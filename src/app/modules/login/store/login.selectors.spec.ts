import * as fromLogin from './login.reducer';
import { selectLogintate } from './login.selectors';

describe('Login Selectors', () => {
  it('should select the feature state', () => {
    const result = selectLogintate({
      [fromLogin.loginFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
