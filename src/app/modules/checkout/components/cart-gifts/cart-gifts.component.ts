import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { cart_cart_availableGifts } from 'src/app/graphql/types/cart';
import { CartItem } from 'src/app/models/cart.model';
import { addCartItem, removeCartItem } from 'src/app/store/cart/cart.actions';
import { selectGifts, selectItems } from 'src/app/store/cart/cart.selectors';

@Component({
  selector: 'vc-cart-gifts',
  templateUrl: './cart-gifts.component.html',
  styleUrls: [
    './cart-gifts.component.scss',
  ],
})
export class CartGiftsComponent implements OnInit, OnDestroy {
  unsubscriber = new Subject();

  gifts: cart_cart_availableGifts[] = [];

  private cartItems: CartItem[] = [];

  constructor(
    private readonly store: Store
  ) { }

  ngOnInit(): void {
    this.store.select(selectGifts)
      .pipe(takeUntil(this.unsubscriber))
      .subscribe(items => {
        this.gifts = items.map(li => ({ ...li }));
      });

    this.store.select(selectItems)
      .pipe(takeUntil(this.unsubscriber))
      .subscribe(items => {
        this.cartItems = items.filter(li => li.isGift);
      });
  }

  onAcceptGiftChanged(item: cart_cart_availableGifts, accept: boolean): void {
    if (accept) {
      this.store.dispatch(addCartItem({
        isGift: true,
        productId: item.productId ?? '',
        quantity: 1,
      }));
    }
    else {
      const cartItemToRemove = this.cartItems.find(li => li.productId == item.productId);
      if (cartItemToRemove) {
        this.store.dispatch(removeCartItem({
          lineItemId: cartItemToRemove.id,
        }));
      }
    }
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
