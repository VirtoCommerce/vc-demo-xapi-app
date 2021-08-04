import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { updateCartPurchaseNumber } from 'src/app/store/cart/cart.actions';
import { selectDynamicCartProperties } from 'src/app/store/cart/cart.selectors';

@Component({
  selector: 'vc-cart-dynamic-property',
  templateUrl: './cart-dynamic-property.component.html',
  styleUrls: [
    './cart-dynamic-property.component.scss',
    '../../checkout.component.scss',
  ],
})
export class CartDynamicPropertyComponent implements OnInit, OnDestroy {
  unsubscriber = new Subject();

  purchaseNumberPropertyName = 'Purchase order number';

  originalPurchaseOrderNumber?: string | null;

  purchaseNumber?: string | null;

  purchaseNumberForm: FormControl = new FormControl()

  purchaseNumberComponentForm: FormGroup = new FormGroup({ purchaseNumberForm: this.purchaseNumberForm });

  get purchaseOrderNumberExist(): boolean {
    return !!this.originalPurchaseOrderNumber;
  }

  get purchaseOrderNumberChanged(): boolean {
    return this.purchaseNumber !== this.originalPurchaseOrderNumber;
  }

  constructor(private readonly store: Store) {}

  updatePurchaseNumber(purchaseNumber?: string | null): void {
    this.purchaseNumberForm.markAsPristine();

    this.store.dispatch(updateCartPurchaseNumber({
      purchaseNumber,
    }));
  }

  clearPurchaseNumber(): void {
    this.purchaseNumber = null;

    this.store.dispatch(updateCartPurchaseNumber({
      purchaseNumber: null,
    }));
  }

  ngOnInit(): void {
    this.store.select(selectDynamicCartProperties)
      .pipe(takeUntil(this.unsubscriber))
      .subscribe(properties => {
        if (properties) {
          const purchaseNumberProperty = properties.find(x => x?.name === this.purchaseNumberPropertyName);
          if (purchaseNumberProperty) {
            this.purchaseNumber = this.originalPurchaseOrderNumber = purchaseNumberProperty.value;
          }
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
