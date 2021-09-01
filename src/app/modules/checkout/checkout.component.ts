import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Cart } from 'src/app/models/cart.model';
import { CheckoutService } from 'src/app/services/checkout.service';
import { getCart, updateCartComment } from '../../store/cart/cart.actions';
import { selectCart } from '../../store/cart/cart.selectors';

@Component({
  selector: 'vc-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: [
    './checkout.component.scss',
  ],
})
export class CheckoutComponent implements OnInit, OnDestroy {
  unsubscriber = new Subject();

  public cart?: Cart;

  constructor(
    private readonly store: Store,
    private readonly router: Router,
    private readonly checkoutService: CheckoutService
  ) { }

  onCommentUpdate(comment: string | null): void {
    this.store.dispatch(updateCartComment({
      comment,
    }));
  }

  submitOrder(): void {
    if (!this.cart?.id)
      return;

    this.checkoutService.createOrder(this.cart.id)
      .pipe(takeUntil(this.unsubscriber))
      .subscribe(number => {
        if (number) {
          void this.router.navigate([
            `/thank-you/${number}`,
          ]);
        }
      });
  }

  ngOnInit(): void {
    this.checkoutService.loadSampleData()
      .pipe(takeUntil(this.unsubscriber))
      .subscribe(() => {
        this.store.dispatch(getCart());

        this.store.select(selectCart)
          .pipe(takeUntil(this.unsubscriber))
          .subscribe(cart => {
            this.cart = cart;
          });
      });
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
