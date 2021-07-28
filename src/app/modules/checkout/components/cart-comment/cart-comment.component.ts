import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Cart } from 'src/app/models/cart.model';
import { getCart } from '../../store/cart.actions';
import { selectCart } from '../../store/cart.selectors';

@Component({
  selector: 'vc-cart-comment',
  templateUrl: './cart-comment.component.html',
  styleUrls: [
    './cart-comment.component.scss',
  ],
})
export class CartCommentComponent implements OnInit, OnDestroy {
  unsubscriber = new Subject();

  cart?: Cart | null;

  constructor(
    private readonly store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(getCart());

    this.store.select(selectCart)
      .pipe(takeUntil(this.unsubscriber))
      .subscribe(cart => {
        this.cart = cart;
      });
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
