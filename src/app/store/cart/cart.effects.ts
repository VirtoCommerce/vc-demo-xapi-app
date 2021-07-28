import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, withLatestFrom, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { ApolloError } from '@apollo/client/errors';
import { cart, cartVariables } from 'src/app/graphql/types/cart';
import getCartQuery from '../../graphql/queries/get-cart.graphql';
import updateCartCommentMutation from '../../graphql/mutations/update-cart-comment.graphql';
import * as CartActions from './cart.actions';
import { updateCartComment, updateCartCommentVariables } from 'src/app/graphql/types/updateCartComment';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUserId } from './cart.selectors';

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
      withLatestFrom(this.store.select(selectUserId)),
      concatMap(([
        _,
        userId,
      ]) => this.apollo.watchQuery<cart>(
        {
          query: getCartQuery,
          variables: {
            ...this.baseCartVariables,
            userId,
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

  updateCartComment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CartActions.updateCartComment),
      withLatestFrom(this.store.select(selectUserId)),
      concatMap(([
        action,
        userId,
      ]) => this.apollo.mutate<updateCartComment, updateCartCommentVariables>({
        mutation: updateCartCommentMutation,
        variables: {
          command: {
            ...this.baseCartVariables,
            userId: userId ?? '',
            comment: action.comment,
          },
        },
      })
        .pipe(
          map(result => CartActions.updateStoredCart({ data: {
            comment: result.data?.changeComment?.comment ?? '',
          } }))
        ))
    );
  });

  setCartUserId$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CartActions.setCartUserId),
      tap(() => {
        void this.router.navigate([
          '/checkout',
        ]);
      })
    );
  }, { dispatch: false });

  constructor(
    private readonly actions$: Actions,
    private readonly apollo: Apollo,
    private readonly router: Router,
    private readonly store: Store
  ) { }
}
