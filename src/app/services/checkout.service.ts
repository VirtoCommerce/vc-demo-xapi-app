import { Injectable, OnDestroy } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ApolloQueryResult, FetchResult } from '@apollo/client/core';
import { Observable, Subject } from 'rxjs';
import { concatMap, takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { clearCart, clearCartVariables } from 'src/app/graphql/types/clearCart';
import { addItemsCart, addItemsCartVariables } from 'src/app/graphql/types/addItemsCart';
import { me } from 'src/app/graphql/types/me';

import clearPaymentsMutation from 'src/app/graphql/mutations/clear-payments.graphql';
import clearShipmentsMutation from 'src/app/graphql/mutations/clear-shipments.graphql';
import clearCartMutation from 'src/app/graphql/mutations/clear-cart.graphql';
import addItemsCartMutation from 'src/app/graphql/mutations/add-cart-items.graphql';
import
updateCartItemDynamicPropertiesMutation
  from 'src/app/graphql/mutations/update-cart-item-dynamic-properties.graphql';
import getMeQuery from '../graphql/queries/get-me.graphql';
import { setCartUserId } from '../store/cart/cart.actions';
import {
  updateCartItemDynamicProperties,
  updateCartItemDynamicPropertiesVariables,
} from 'src/app/graphql/types/updateCartItemDynamicProperties';
import { clearShipments, clearShipmentsVariables } from 'src/app/graphql/types/clearShipments';
import { clearPayments, clearPaymentsVariables } from '../graphql/types/clearPayments';
import { cartVariables } from '../graphql/types/cart';

@Injectable({
  providedIn: 'root',
})

export class CheckoutService implements OnDestroy {
  baseCartVariables: cartVariables = {
    storeId: 'Electronics',
    cartName: 'default',
    currencyCode: 'USD',
    cultureName: 'en-US',
  }

  unsubscriber: Subject<boolean> = new Subject<boolean>();

  constructor(private readonly apollo: Apollo, private readonly store: Store) { }

  loadSampleData(): Observable<string> {
    return new Observable<string>(observer => {
      this.getMe()
        .pipe(
          concatMap(getMeResult => this.clearPayments(getMeResult.data.me?.id)),
          concatMap(clearPaymentsResult => this.clearShipments(clearPaymentsResult.data?.clearPayments?.customerId)),
          concatMap(clearShipmentsResult => this.clearCart(clearShipmentsResult.data?.clearShipments?.customerId)),
          concatMap(clearCartResult => this.addItemsToCart(
            clearCartResult.data?.clearCart?.customerId ?? 'Anonymous',
            clearCartResult.data?.clearCart?.id
          )),
          concatMap(lastResult => this.updateCartItemDynamicProperties(
            lastResult.data?.addItemsCart?.customerId ?? 'Anonymous',
            lastResult.data?.addItemsCart?.items?.find(x => x?.productId === '9cbd8f316e254a679ba34a900fccb076')?.id ??
            'id-1',
            [
              {
                name: 'Brand',
                value: 'Epson',
              },
              {
                name: 'Is alcoholic',
                value: 'true',
              },
            ]
          )),
          concatMap(lastResult => this.updateCartItemDynamicProperties(
            lastResult.data?.updateCartItemDynamicProperties?.customerId ?? 'Anonymous',
            lastResult.data?.updateCartItemDynamicProperties?.items?.find(
              x => x?.productId === 'e7eee66223da43109502891b54bc33d3'
            )?.id ?? 'id-2',
            [
              {
                name: 'Production date',
                value: '2021-07-15',
              },
              {
                name: 'Pack size',
                value: '123',
              },
            ]
          )),
          takeUntil(this.unsubscriber)
        )
        .subscribe(c => {
          const userId = c.data?.updateCartItemDynamicProperties?.customerId ?? 'Anonymous';

          this.store.dispatch(
            setCartUserId({
              userId,
            })
          );

          observer.next(userId);
        });
    });
  }

  getMe(): Observable<ApolloQueryResult<me>> {
    return this.apollo.query<me>({ query: getMeQuery });
  }

  clearPayments(userId?: string | null): Observable<FetchResult<clearPayments>> {
    return this.apollo.mutate<clearPayments, clearPaymentsVariables>({
      mutation: clearPaymentsMutation,
      variables: {
        command: {
          ...this.baseCartVariables,
          userId: userId ?? 'Anonymous',
        },
      },
    });
  }

  clearShipments(userId?: string | null): Observable<FetchResult<clearShipments>> {
    return this.apollo.mutate<clearShipments, clearShipmentsVariables>({
      mutation: clearShipmentsMutation,
      variables: {
        command: {
          ...this.baseCartVariables,
          userId: userId ?? 'Anonymous',
        },
      },
    });
  }

  clearCart(userId?: string | null): Observable<FetchResult<clearCart>> {
    return this.apollo.mutate<clearCart, clearCartVariables>({
      mutation: clearCartMutation,
      variables: {
        command: {
          ...this.baseCartVariables,
          userId: userId ?? 'Anonymous',
        },
      },
    });
  }

  addItemsToCart(userId: string, cartId: string | null | undefined): Observable<FetchResult<addItemsCart>> {
    return this.apollo.mutate<addItemsCart, addItemsCartVariables>({
      mutation: addItemsCartMutation,
      variables: {
        command: {
          userId,
          cartId,
          storeId: 'Electronics',
          cartItems: [
            {
              productId: '9cbd8f316e254a679ba34a900fccb076',
              quantity: 2,
            },
            {
              productId: 'e7eee66223da43109502891b54bc33d3',
              quantity: 1,
            },
          ],
        },
      },
    });
  }

  updateCartItemDynamicProperties(
    userId: string,
    itemId: string,
    dynamicProperties: { name: string; value: string }[]
  ): Observable<FetchResult<updateCartItemDynamicProperties>> {
    return this.apollo.mutate<updateCartItemDynamicProperties, updateCartItemDynamicPropertiesVariables>({
      mutation: updateCartItemDynamicPropertiesMutation,
      variables: {
        command: {
          lineItemId: itemId,
          userId,
          storeId: 'Electronics',
          dynamicProperties,
        },
      },
    });
  }

  ngOnDestroy(): void {
    this.unsubscriber.next(true);
    this.unsubscriber.unsubscribe();
  }
}
