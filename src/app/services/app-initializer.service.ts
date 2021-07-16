import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadEnvironmentVariables } from '../modules/environment-variables/store/environment-variables.actions';
import { State } from '../store';

@Injectable({
  providedIn: 'root'
})
export class AppInitializerService {

  constructor(private store: Store<State>) { }

  initialize() {
    this.store.dispatch(loadEnvironmentVariables());
  }
}
