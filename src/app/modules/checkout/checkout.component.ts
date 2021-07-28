import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Cart } from 'src/app/models/cart.model';
import { getCart, updateCartComment } from '../../store/cart/cart.actions';
import { selectCart } from '../../store/cart/cart.selectors';

@Component({
  selector: 'vc-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: [
    './checkout.component.scss',
  ],
})
export class CheckoutComponent implements AfterViewInit, OnDestroy {
  routeWatcher!: Subscription;

  unsubscriber = new Subject();

  public cartId?: string | null;

  public cart?: Cart | null;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly store: Store
  ) { }

  onCommentUpdate(comment: string): void {
    this.store.dispatch(updateCartComment({
      comment: comment,
    }));
  }

  ngAfterViewInit(): void {
    this.routeWatcher = this.route
      .queryParamMap
      .subscribe(params => {
        if (params.has('cartId')) {
          this.cartId = params.get('cartId');
        }
      });

    this.store.dispatch(getCart());

    this.store.select(selectCart)
      .pipe(takeUntil(this.unsubscriber))
      .subscribe(cart => {
        this.cart = cart;
      });
  }

  ngOnDestroy(): void {
    this.routeWatcher.unsubscribe();

    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
