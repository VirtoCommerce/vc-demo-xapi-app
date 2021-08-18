import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Cart, CartAddress, Payment, Shipment } from 'src/app/models/cart.model';
import { addOrUpdatePayment, addOrUpdateShipment } from 'src/app/store/cart/cart.actions';
import { selectIsBillingAddressAsShipping } from 'src/app/store/cart/cart.selectors';
import { AddressFormComponent } from '../address-form/address-form.component';

@Component({
  selector: 'vc-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: [
    './shipping-address.component.scss',
    '../../checkout.component.scss',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ShippingAddressComponent implements OnInit, OnDestroy {
  @Input() cart?: Cart | null;

  billingAddressAsShipping = true;

  public get address(): CartAddress | null {
    return this.cart?.shipments?.length
      ? this.cart.shipments[0].deliveryAddress ?? null
      : null;
  }

  unsubscriber = new Subject();

  constructor(
    private readonly modalService: NgbModal,
    private readonly store: Store
  ) { }

  openCreateAddress(): void {
    const modal = this.modalService.open(AddressFormComponent, {
      modalDialogClass: 'modal-custom-size modal-position',
    });
    const addressForm = modal.componentInstance as AddressFormComponent;

    addressForm.cartAddress = this.address;

    addressForm.addressUpdated
      .pipe(takeUntil(this.unsubscriber))
      .subscribe(address => {
        const shipment: Shipment = this.cart?.shipments?.length ? this.cart.shipments[0] : {};

        this.store.dispatch(addOrUpdateShipment({ shipment: {
          ...shipment,
          deliveryAddress: { ...address },
        } }));

        if (this.billingAddressAsShipping) {
          const payment: Payment = this.cart?.payments?.length ? this.cart.payments[0] : {};

          this.store.dispatch(addOrUpdatePayment({ payment: {
            ...payment,
            billingAddress: { ...address },
          } }));
        }
      });
  }

  ngOnInit(): void {
    this.store.select(selectIsBillingAddressAsShipping)
      .pipe(takeUntil(this.unsubscriber))
      .subscribe(value => {
        this.billingAddressAsShipping = value;
      });
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
