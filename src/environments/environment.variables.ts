import { Injectable } from '@angular/core';

@Injectable()
export class EnvironmentVariables {
  constructor(public platformUrl: string) {
  }
}
