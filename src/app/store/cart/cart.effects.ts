import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, concatMap, tap } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { ApolloError } from '@apollo/client/errors';
import getCartQuery from '../../graphql/queries/get-cart.graphql';
import updateCartCommentMutation from '../../graphql/mutations/update-cart-comment.graphql';
import * as CartActions from './cart.actions';
import { cart, cartVariables } from 'src/app/graphql/types/cart';
import { updateCartComment, updateCartCommentVariables } from 'src/app/graphql/types/updateCartComment';

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
      concatMap(() => this.apollo.watchQuery<cart>({
        query: getCartQuery,
        variables: {
          ...this.baseCartVariables,
          userId: localStorage.getItem('cartUserId'),
        },
      })
        .valueChanges
        .pipe(
          map(result => CartActions.getCartSuccess({ data: result.data })),
          catchError((error: ApolloError) => of(CartActions.getCartFailure({ error })))
        ))
    );
  });

  updateCartComment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CartActions.updateCartComment),
      concatMap(action => this.apollo.mutate<updateCartComment, updateCartCommentVariables>({
        mutation: updateCartCommentMutation,
        variables: {
          command: {
            ...this.baseCartVariables,
            userId: localStorage.getItem('cartUserId') ?? '',
            comment: action.comment,
          },
        },
      })
        .pipe(
          map(result => CartActions.updateStoredCart({
            data: {
              comment: result.data?.changeComment?.comment,
            },
          }))
        ))
    );
  });

  setCartUserId$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CartActions.setCartUserId),
      tap(result => {
        localStorage.setItem('cartUserId', result.userId);
      })
    );
  }, { dispatch: false });

  constructor(
    private readonly actions$: Actions,
    private readonly apollo: Apollo,
    private readonly router: Router
  ) { }
}
