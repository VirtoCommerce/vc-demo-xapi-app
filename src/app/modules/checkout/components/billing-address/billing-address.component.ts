import { Component, Input, OnDestroy, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Cart, CartAddress, Payment, Shipment } from 'src/app/models/cart.model';
import { addOrUpdatePayment, setBillingAsShipping } from 'src/app/store/cart/cart.actions';
import { selectIsBillingAddressAsShipping } from 'src/app/store/cart/cart.selectors';
import { AddressFormComponent } from '../address-form/address-form.component';

@Component({
  selector: 'vc-billing-address',
  templateUrl: './billing-address.component.html',
  styleUrls: [
    './billing-address.component.scss',
    '../../checkout.component.scss',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class BillingAddressComponent implements OnDestroy {
  @Input() cart?: Cart | null;

  billingAddressAsShipping$ = this.store.select(selectIsBillingAddressAsShipping);

  addressHidden = false;

  previousAddress: CartAddress | null = null;

  get address(): CartAddress | null {
    return this.cart?.payments?.length
      ? this.cart.payments[0]?.billingAddress ?? null
      : null;
  }

  get payment(): Payment {
    return this.cart?.payments?.length ? this.cart.payments[0] : {};
  }

  get shipment(): Shipment {
    return this.cart?.shipments?.length ? this.cart.shipments[0] : {};
  }

  unsubscriber = new Subject();

  constructor(
    private readonly modalService: NgbModal,
    private readonly store: Store
  ) { }

  onModelChange(value: boolean): void {
    this.store.dispatch(setBillingAsShipping({
      value,
    }));

    if (!value) {
      this.addressHidden = true;

      // Remember the address if it's present
      this.previousAddress = this.address;

      if (this.previousAddress) {
        this.store.dispatch(addOrUpdatePayment({
          payment: {
            ...this.payment,
            billingAddress: undefined,
          },
        }));
      }
    }
    else {
      const address = this.previousAddress ?? this.shipment.deliveryAddress;
      if (address) {
        this.store.dispatch(addOrUpdatePayment({
          payment: {
            ...this.payment,
            billingAddress: address,
          },
        }));
      }
      this.previousAddress = null;
    }
  }

  openCreateAddress(): void {
    const modal = this.modalService.open(AddressFormComponent, {
      modalDialogClass: 'modal-custom-size modal-position',
    });
    const addressForm = modal.componentInstance as AddressFormComponent;

    addressForm.isShippingMode = false;
    addressForm.cartAddress = !this.addressHidden ? this.address : null;

    addressForm.addressUpdated
      .pipe(takeUntil(this.unsubscriber))
      .subscribe(address => {
        this.addressHidden = false;

        const payment: Payment = this.cart?.payments?.length ? this.cart.payments[0] : {};
        this.store.dispatch(addOrUpdatePayment({
          payment: {
            ...payment,
            billingAddress: { ...address },
          },
        }));
      });
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
