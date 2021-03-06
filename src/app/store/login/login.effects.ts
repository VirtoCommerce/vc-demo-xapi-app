import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, tap } from 'rxjs/operators';
import { from, of } from 'rxjs';

import * as LoginActions from './login.actions';
import * as CurrentCustomerActions from 'src/app/store/current-customer/current-customer.actions';
import { HttpParams, HttpClient, HttpErrorResponse } from '@angular/common/http';
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
        catchError((error: HttpErrorResponse) => of(LoginActions.loginFailure({
          error: (error.error as { errorDescription: string }).errorDescription,
        })))
      ))
    );
  });

  saveToken$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LoginActions.loginSuccess),
      tap(action => localStorage.setItem('token', action.token))
    );
  }, { dispatch: false });

  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LoginActions.logout),
      tap(() => localStorage.removeItem('token'))
    );
  }, { dispatch: false });

  redirectToLoggedIn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LoginActions.loginSuccess),
      concatMap(() => from(this.router.navigate([
        'login',
        'logged-in',
      ])))
    );
  }, { dispatch: false });

  loadUserProfile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LoginActions.loginSuccess, LoginActions.loginRestore),
      map(CurrentCustomerActions.getCurrentCustomer)
    );
  });

  constructor(
    private readonly actions$: Actions,
    private readonly httpClient: HttpClient,
    private readonly router: Router
  ) {}
}
