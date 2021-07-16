import * as fromEnvironmentVariables from './environment-variables.actions';

describe('loadEnvironmentVariables', () => {
  it('should return an action', () => {
    expect(fromEnvironmentVariables.loadEnvironmentVariables().type).toBe(
      '[EnvironmentVariables] Load EnvironmentVariables'
    );
  });
});
