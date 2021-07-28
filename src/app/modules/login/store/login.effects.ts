import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as LoginActions from './login.actions';
import { HttpParams, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class LoginEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(LoginActions.login),
      concatMap(action => this.httpClient.post<{access_token: string}>(
        `${environment.variables.platformUrl}/connect/token`,
        new HttpParams({ fromObject: {
          grant_type: 'password',
          username: action.userName,
          password: action.password,
        } }).toString(),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      ).pipe(
        map(data => LoginActions.loginSuccess({ token: data.access_token })),
        catchError(error => of(LoginActions.loginFailure({ error: error as string })))
      ))
    );
  });

  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LoginActions.logout),
      tap(() => localStorage.removeItem('token'))
    );
  }, { dispatch: false });

  constructor(private readonly actions$: Actions, private readonly httpClient: HttpClient) {}
}
