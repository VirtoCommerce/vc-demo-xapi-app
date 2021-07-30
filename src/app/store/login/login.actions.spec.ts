import * as fromLogin from './login.actions';

describe('Login', () => {
  it('should return an action', () => {
    expect(fromLogin.login({
      userName: 'username',
      password: 'password',
    }).type).toBe('[Login] Login');
  });
});
