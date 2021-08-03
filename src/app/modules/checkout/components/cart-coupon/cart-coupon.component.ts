import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Apollo } from 'apollo-angular';
import { FetchResult } from '@apollo/client/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Coupon } from 'src/app/models/cart.model';
import { selectCoupons } from 'src/app/store/cart/cart.selectors';
import { validateCartCoupon, validateCartCouponVariables } from 'src/app/graphql/types/validateCartCoupon';
import validateCouponMutation from 'src/app/graphql/mutations/validate-cart-coupon.graphql';
import { addCartCoupon, removeCartCoupon } from 'src/app/store/cart/cart.actions';

@Component({
  selector: 'vc-cart-coupon',
  templateUrl: './cart-coupon.component.html',
  styleUrls: [
    './cart-coupon.component.scss',
    '../../checkout.component.scss',
  ],
})
export class CartCouponComponent implements OnInit, OnDestroy {
  unsubscriber = new Subject();

  validateCouponResult?: boolean;

  hasCoupon = false;

  coupon: Coupon = {
    code: null,
    isAppliedSuccessfully: false,
  };

  constructor(
    private readonly store: Store,
    private readonly apollo: Apollo
  ) { }

  updateCoupon(coupon: string | null): void {
    this.validateCoupon(coupon ?? '')
      .pipe(takeUntil(this.unsubscriber))
      .subscribe(c => {
        this.validateCouponResult = c.data?.validateCoupon ?? false;

        if (this.validateCouponResult) {
          this.store.dispatch(addCartCoupon({
            coupon,
          }));
        }
      });
  }

  clearCoupon(coupon: string | null): void {
    this.store.dispatch(removeCartCoupon({
      coupon,
    }));
  }

  validateCoupon(couponCode: string): Observable<FetchResult<validateCartCoupon>> {
    return this.apollo.mutate<validateCartCoupon, validateCartCouponVariables>({
      mutation: validateCouponMutation,
      variables: {
        command: {
          userId: localStorage.getItem('cartUserId') ?? '',
          storeId: 'Electronics',
          cartName: 'default',
          currencyCode: 'USD',
          cultureName: 'en-US',
          coupon: couponCode,
        },
      },
    });
  }

  ngOnInit(): void {
    this.store.select(selectCoupons)
      .pipe(takeUntil(this.unsubscriber))
      .subscribe(coupons => {
        if (coupons && coupons.length) {
          this.coupon = { ...coupons[0] as Coupon };
          this.hasCoupon = true;
        }
        else {
          this.coupon = {
            code: null,
            isAppliedSuccessfully: false,
          };
          this.hasCoupon = false;
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
