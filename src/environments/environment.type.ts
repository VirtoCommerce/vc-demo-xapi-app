import { EnvironmentVariables } from './environment.variables';

export class Environment {
  variables!: EnvironmentVariables;

  constructor(public production: boolean) {
  }
}
