import { ApolloError } from '@apollo/client/core';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as CurrentCustomerActions from './current-customer.actions';
import { getCurrentCustomer } from 'src/app/graphql/types/getCurrentCustomer';
import getCurrentCustomerQuery from '../../graphql/queries/get-current-customer.graphql';
import { Apollo } from 'apollo-angular';

@Injectable()
export class CurrentCustomerEffects {
  getCurrentCustomer$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(CurrentCustomerActions.getCurrentCustomer),
      concatMap(() =>this.apollo.watchQuery<getCurrentCustomer>({ query: getCurrentCustomerQuery })
        .valueChanges
        .pipe(
          map(result => CurrentCustomerActions.getCurrentCustomerSuccess({ data: result.data })),
          catchError((error: ApolloError) => of(CurrentCustomerActions.getCurrentCustomerFailure({ error })))
        ))
    );
  });

  constructor(
    private readonly actions$: Actions,
    private readonly apollo: Apollo
  ) {}
}
