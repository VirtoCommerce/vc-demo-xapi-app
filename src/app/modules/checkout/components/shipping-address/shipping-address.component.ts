import { Component, Input, OnDestroy, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Cart, CartAddress } from 'src/app/models/cart.model';
import { addOrUpdateShippingAddress } from 'src/app/store/cart/cart.actions';
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
export class ShippingAddressComponent implements OnDestroy {
  @Input() cart?: Cart | null;

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
        const shipmentId: string | null = this.cart?.shipments?.length
          ? this.cart.shipments[0].id
          : null;

        this.store.dispatch(addOrUpdateShippingAddress({
          shipmentId,
          address,
        }));
      });
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
