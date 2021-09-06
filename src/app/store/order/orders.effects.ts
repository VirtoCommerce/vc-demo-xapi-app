import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as OrdersActions from './orders.actions';
import { Apollo } from 'apollo-angular';
import { orders } from 'src/app/graphql/types/orders';
import loadOrdersQuery from 'src/app/graphql/queries/get-orders.graphql';
import { ApolloError } from '@apollo/client/core';

@Injectable()
export class OrdersEffects {
  loadOrders$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(OrdersActions.loadOrders),
      switchMap(action => this.apollo.watchQuery<orders>({
        query: loadOrdersQuery,
        variables: {
          customerId: action.currentCustomerId,
          filter: action.filter,
          first: action.count,
          after: action.cursor,
          sort: action.sort,
        },
      })
        .valueChanges
        .pipe(
          map(result => OrdersActions.loadOrdersSuccess({ data: result.data })),
          catchError((error: ApolloError) => of(OrdersActions.loadOrdersFailure({ error })))
        ))
    );
  });

  constructor(
    private readonly actions$: Actions,
    private readonly apollo: Apollo
  ) {}
}
