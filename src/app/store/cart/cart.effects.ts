import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, concatMap, tap } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { ApolloError } from '@apollo/client/errors';
import getCartQuery from '../../graphql/queries/get-cart.graphql';
import removeCartItemMutation from '../../graphql/mutations/remove-cart-item.graphql';
import updateCartCommentMutation from '../../graphql/mutations/update-cart-comment.graphql';
import * as CartActions from './cart.actions';
import { cart, cartVariables } from 'src/app/graphql/types/cart';
import { removeCartItem, removeCartItemVariables } from 'src/app/graphql/types/removeCartItem';
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

  removeCartItem$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CartActions.removeCartItem),
      concatMap(action => this.apollo.mutate<removeCartItem, removeCartItemVariables>({
        mutation: removeCartItemMutation,
        variables: {
          command: {
            ...this.baseCartVariables,
            userId: localStorage.getItem('cartUserId') ?? '',
            lineItemId: action.lineItemId,
          },
        },
      })
        .pipe(
          map(result => CartActions.updateStoredCart({
            data: {
              ...result.data?.removeCartItem,
            },
          }))
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
