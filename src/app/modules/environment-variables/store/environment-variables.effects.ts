import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as EnvironmentVariablesActions from './environment-variables.actions';
import { HttpClient } from '@angular/common/http';
import { EnvironmentVariables } from './environment-variables.payload';



@Injectable()
export class EnvironmentVariablesEffects {

  loadEnvironmentVariables$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(EnvironmentVariablesActions.loadEnvironmentVariables),
      concatMap(() =>
        this.httpClient.get('environments/environment.variables.json').pipe(
          map(data => EnvironmentVariablesActions.loadEnvironmentVariablesSuccess({ data: data as EnvironmentVariables })),
          catchError(error => of(EnvironmentVariablesActions.loadEnvironmentVariablesFailure({ error }))))
      )
    );
  });



  constructor(
    private httpClient: HttpClient,
    private actions$: Actions) {}

}
