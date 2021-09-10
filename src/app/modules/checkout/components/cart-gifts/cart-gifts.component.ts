import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GiftRecord } from 'src/app/models/cart.model';
import { addGiftItem, rejectCartItem } from 'src/app/store/cart/cart.actions';
import { selectGifts } from 'src/app/store/cart/cart.selectors';

@Component({
  selector: 'vc-cart-gifts',
  templateUrl: './cart-gifts.component.html',
  styleUrls: [
    './cart-gifts.component.scss',
  ],
})
export class CartGiftsComponent implements OnInit, OnDestroy {
  unsubscriber = new Subject();

  allGifts: GiftRecord[] = [];

  constructor(
    private readonly store: Store
  ) { }

  ngOnInit(): void {
    this.store.select(selectGifts)
      .pipe(takeUntil(this.unsubscriber))
      .subscribe(gifts => {
        this.allGifts = gifts;
      });
  }

  onAcceptGiftChanged(item: GiftRecord, accept: boolean): void {
    if (accept) {
      this.store.dispatch(addGiftItem({
        productId: item.productId ?? '',
      }));
    }
    else if (item.id) {
      this.store.dispatch(rejectCartItem({
        lineItemId: item.id,
      }));
    }
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
