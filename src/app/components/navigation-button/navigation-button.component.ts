import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';

import { clearCart, clearCartVariables } from 'src/app/graphql/types/clearCart';
import { addItemsCart, addItemsCartVariables } from 'src/app/graphql/types/addItemsCart';
import { me } from 'src/app/graphql/types/me';

import clearCartMutation from 'src/app/graphql/mutations/clear-cart.graphql';
import addItemsCartMutation from 'src/app/graphql/mutations/add-cart-items.graphql';
import getMeQuery from '../../graphql/queries/get-me.graphql';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

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
    private readonly router: Router
  ) {}

  openCheckout(): void {
    this.apollo.query<me>({ query: getMeQuery })
      .pipe(takeUntil(this.unsubscriber))
      .subscribe(m => {
        const userId = m.data.me?.id ?? 'Anonymous';

        this.apollo.mutate<clearCart, clearCartVariables>({
          mutation: clearCartMutation,
          variables: {
            command: {
              userId,
              storeId: 'Electronics',
              cartName: 'default',
              currencyCode: 'USD',
              cultureName: 'en-US',
            },
          },
        })
          .pipe(takeUntil(this.unsubscriber))
          .subscribe(cc => {
            this.apollo.mutate<addItemsCart, addItemsCartVariables>({
              mutation: addItemsCartMutation,
              variables: {
                command: {
                  userId,
                  cartId: cc.data?.clearCart?.id,
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
            })
              .pipe(takeUntil(this.unsubscriber))
              .subscribe(c => {
                const cartId = c.data?.addItemsCart?.id;

                void this.router.navigate([
                  '/checkout',
                ], { queryParams: { cartId } });
              });
          });
      });
  }

  ngOnDestroy():void {
    this.unsubscriber.next(true);
    this.unsubscriber.unsubscribe();
  }
}
