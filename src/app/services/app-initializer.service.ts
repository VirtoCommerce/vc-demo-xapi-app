import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadEnvironmentVariables } from '../modules/environment-variables/store/environment-variables.actions';

@Injectable({
  providedIn: 'root'
})
export class AppInitializerService {

  constructor(private store: Store) { }

  initialize(): void {
    this.store.dispatch(loadEnvironmentVariables());
  }
}
