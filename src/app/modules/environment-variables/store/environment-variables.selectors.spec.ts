import * as fromEnvironmentVariables from './environment-variables.reducer';
import { selectEnvironmentVariablesState } from './environment-variables.selectors';

describe('EnvironmentVariables Selectors', () => {
  it('should select the feature state', () => {
    const result = selectEnvironmentVariablesState({
      [fromEnvironmentVariables.environmentVariablesFeatureKey]: {},
    });

    expect(result).toEqual({});
  });
});
