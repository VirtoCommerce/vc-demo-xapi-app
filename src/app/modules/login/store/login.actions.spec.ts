import * as fromLogin from './login.actions';

describe('Login', () => {
  it('should return an action', () => {
    expect(fromLogin.Login().type).toBe('[Login]  Login');
  });
});
