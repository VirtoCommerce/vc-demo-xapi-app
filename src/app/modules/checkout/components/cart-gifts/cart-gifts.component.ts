import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Gift } from 'src/app/models/cart.model';
import { addGiftItems, rejectCartItems } from 'src/app/store/cart/cart.actions';
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

  allGifts: Gift[] = [];

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

  onAcceptGiftChanged(item: Gift, accept: boolean): void {
    if (accept) {
      // Add gift by sending reward id
      this.store.dispatch(addGiftItems({
        ids: [
          item.id,
        ],
      }));
    }
    else if (item.lineItemId) {
      // Reject gift line item by sending lineItem.id
      this.store.dispatch(rejectCartItems({
        ids: [
          item.lineItemId,
        ],
      }));
    }
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
