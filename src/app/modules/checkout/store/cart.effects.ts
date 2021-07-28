import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { ApolloError } from '@apollo/client/errors';
import { cart, cartVariables } from 'src/app/graphql/types/cart';
import getCartQuery from '../../../graphql/queries/get-cart.graphql';
import * as CartActions from './cart.actions';

@Injectable()
export class CartEffects {
  baseCartVariables: cartVariables = {
    storeId: 'Electronics',
    cartName: 'default',
    currencyCode: 'USD',
    cultureName: 'en-US',
  }

  getCart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CartActions.getCart),
      concatMap(() => this.apollo.watchQuery<cart>(
        {
          query: getCartQuery,
          variables: {
            ...this.baseCartVariables,
            userId: '1eb2fa8ac6574541afdb525833dadb46', // ????? how to pass user id ?????
          },
        }
      )
        .valueChanges
        .pipe(
          map(result => CartActions.getCartSuccess({ data: result.data })),
          catchError((error: ApolloError) => of(CartActions.getCartFailure({ error })))
        ))
    );
  });

  constructor(
    private readonly actions$: Actions,
    private readonly apollo: Apollo
  ) { }
}
