import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, concatMap, tap } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { ApolloError } from '@apollo/client/errors';

import * as CartActions from './cart.actions';

import getCartQuery from '../../graphql/queries/get-cart.graphql';
import updateCartCommentMutation from '../../graphql/mutations/update-cart-comment.graphql';
import updateCartDynamicPropertiesMutation from '../../graphql/mutations/update-cart-dynamic-properties.graphql';
import addCartCouponMutation from '../../graphql/mutations/add-cart-coupon.graphql';
import removeCartCouponMutation from '../../graphql/mutations/remove-cart-coupon.graphql';

import { cart, cartVariables } from 'src/app/graphql/types/cart';
import { updateCartComment, updateCartCommentVariables } from 'src/app/graphql/types/updateCartComment';
import { updateCartDynamicProperties, updateCartDynamicPropertiesVariables }
  from 'src/app/graphql/types/updateCartDynamicProperties';
import { addCartCoupon, addCartCouponVariables } from 'src/app/graphql/types/addCartCoupon';
import { removeCartCoupon, removeCartCouponVariables } from 'src/app/graphql/types/removeCartCoupon';

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
      concatMap(() => this.apollo.query<cart>({
        query: getCartQuery,
        variables: {
          ...this.baseCartVariables,
          userId: localStorage.getItem('cartUserId'),
        },
      })
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

  updateCartPurchaseNumber$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CartActions.updateCartPurchaseNumber),
      concatMap(action => this.apollo.mutate<updateCartDynamicProperties, updateCartDynamicPropertiesVariables>({
        mutation: updateCartDynamicPropertiesMutation,
        variables: {
          command: {
            ...this.baseCartVariables,
            userId: localStorage.getItem('cartUserId') ?? '',
            dynamicProperties: [
              {
                name: 'Purchase order number',
                value: action.purchaseNumber,
              },
            ],
          },
        },
      })
        .pipe(
          map(result => CartActions.updateCartDynamicProperties({
            dynamicProperties: result.data?.updateCartDynamicProperties?.dynamicProperties,
          }))
        ))
    );
  });

  addCartCoupon$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CartActions.addCartCoupon),
      concatMap(action => this.apollo.mutate<addCartCoupon, addCartCouponVariables>({
        mutation: addCartCouponMutation,
        variables: {
          command: {
            ...this.baseCartVariables,
            userId: localStorage.getItem('cartUserId') ?? '',
            couponCode: action.coupon ?? '',
          },
        },
      })
        .pipe(
          map(result => CartActions.addCartCouponSuccess({
            data: result.data?.addCoupon ?? null,
          }))
        ))
    );
  });

  removeCartCoupon$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CartActions.removeCartCoupon),
      concatMap(action => this.apollo.mutate<removeCartCoupon, removeCartCouponVariables>({
        mutation: removeCartCouponMutation,
        variables: {
          command: {
            ...this.baseCartVariables,
            userId: localStorage.getItem('cartUserId') ?? '',
            couponCode: action.coupon ?? '',
          },
        },
      })
        .pipe(
          map(result => CartActions.removeCartCouponSuccess({
            data: result.data?.removeCoupon ?? null,
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
    private readonly apollo: Apollo
  ) { }
}
