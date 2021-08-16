import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { ApolloQueryResult, FetchResult } from '@apollo/client/core';
import { Observable, Subject } from 'rxjs';
import { concatMap, takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { clearCart, clearCartVariables } from 'src/app/graphql/types/clearCart';
import { addItemsCart, addItemsCartVariables } from 'src/app/graphql/types/addItemsCart';
import { me } from 'src/app/graphql/types/me';

import clearShipmentMutation from 'src/app/graphql/mutations/clear-shipments.graphql';
import clearCartMutation from 'src/app/graphql/mutations/clear-cart.graphql';
import addItemsCartMutation from 'src/app/graphql/mutations/add-cart-items.graphql';
import updateCartItemDynamicPropertiesMutation
  from 'src/app/graphql/mutations/update-cart-item-dynamic-properties.graphql';
import getMeQuery from '../../graphql/queries/get-me.graphql';
import { setCartUserId } from '../../store/cart/cart.actions';
import {
  updateCartItemDynamicProperties,
  updateCartItemDynamicPropertiesVariables,
} from 'src/app/graphql/types/updateCartItemDynamicProperties';
import { clearShipments, clearShipmentsVariables } from 'src/app/graphql/types/clearShipments';

@Component({
  selector: 'vc-navigation-button',
  templateUrl: './navigation-button.component.html',
  styleUrls: [
    './navigation-button.component.scss',
  ],
})
export class NavigationButtonComponent implements OnDestroy {
  unsubscriber: Subject<boolean> = new Subject<boolean>();

  constructor(
    private readonly apollo: Apollo,
    private readonly store: Store,
    private readonly router: Router
  ) { }

  openCheckout(): void {
    this.getMe().pipe(
      concatMap(getMeResult => this.clearShipments(getMeResult.data.me?.id)),
      concatMap(clearShipmentsResult => this.clearCart(clearShipmentsResult.data?.clearShipments?.customerId)),
      concatMap(clearCartResult => this.addItemsToCart(
        clearCartResult.data?.clearCart?.customerId ?? 'Anonymous',
        clearCartResult.data?.clearCart?.id
      )),
      concatMap(lastResult => this.updateCartItemDynamicProperties(
        lastResult.data?.addItemsCart?.customerId ?? 'Anonymous',
        lastResult.data?.addItemsCart?.items?.
          find(x => x?.productId === '9cbd8f316e254a679ba34a900fccb076')?.id ?? 'id-1',
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
        lastResult.data?.updateCartItemDynamicProperties?.items?.
          find(x => x?.productId === 'e7eee66223da43109502891b54bc33d3')?.id ?? 'id-2',
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
        this.store.dispatch(setCartUserId({
          userId: c.data?.updateCartItemDynamicProperties?.customerId ?? 'Anonymous',
        }));

        void this.router.navigate([
          '/checkout',
        ]);
      });
  }

  getMe(): Observable<ApolloQueryResult<me>> {
    return this.apollo.query<me>({ query: getMeQuery });
  }

  clearShipments(userId?: string | null): Observable<FetchResult<clearShipments>> {
    return this.apollo.mutate<clearShipments, clearShipmentsVariables>({
      mutation: clearShipmentMutation,
      variables: {
        command: {
          userId: userId ?? 'Anonymous',
          storeId: 'Electronics',
          cartName: 'default',
          currencyCode: 'USD',
          cultureName: 'en-US',
        },
      },
    });
  }

  clearCart(userId?: string | null): Observable<FetchResult<clearCart>> {
    return this.apollo.mutate<clearCart, clearCartVariables>({
      mutation: clearCartMutation,
      variables: {
        command: {
          userId: userId ?? 'Anonymous',
          storeId: 'Electronics',
          cartName: 'default',
          currencyCode: 'USD',
          cultureName: 'en-US',
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

  updateCartItemDynamicProperties(userId: string, itemId: string, dynamicProperties: { name: string; value: string; }[])
    : Observable<FetchResult<updateCartItemDynamicProperties>> {
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
