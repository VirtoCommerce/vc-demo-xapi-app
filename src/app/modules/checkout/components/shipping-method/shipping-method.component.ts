import { Component, Input, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Cart, Shipment, ShippingMethodRecord } from 'src/app/models/cart.model';
import { addOrUpdateShipment } from 'src/app/store/cart/cart.actions';
import { ShippingMethodSelectComponent } from '../shipping-method-select/shipping-method-select.component';

@Component({
  selector: 'vc-shipping-method',
  templateUrl: './shipping-method.component.html',
  styleUrls: [
    './shipping-method.component.scss',
    '../../checkout.component.scss',
  ],
})
export class ShippingMethodComponent implements OnDestroy {
  @Input() cart?: Cart | null;

  shippingMethod?: ShippingMethodRecord | null;

  unsubscriber = new Subject();

  constructor(
    private readonly modalService: NgbModal,
    private readonly store: Store
  ) { }

  get shipment(): Shipment {
    return this.cart?.shipments?.length ? this.cart.shipments[0] : {};
  }

  openChangeShippingMethod(): void {
    const modal = this.modalService.open(ShippingMethodSelectComponent, {
      modalDialogClass: 'modal-custom-size-2 modal-position',
    });
    const methodsComponent = modal.componentInstance as ShippingMethodSelectComponent;

    methodsComponent.methods = this.cart?.shippingMethods?.map<ShippingMethodRecord>(x => {
      return {
        ...x,
        isActive: this.shipment?.shipmentMethodCode === x.code && this.shipment?.shipmentMethodOption === x.optionName,
      };
    }) ?? [];

    methodsComponent.methodSelected
      .pipe(takeUntil(this.unsubscriber))
      .subscribe(method => {
        this.shippingMethod = method;

        this.store.dispatch(addOrUpdateShipment({
          shipment: {
            ...this.shipment,
            price: { ...method.price },
            shipmentMethodCode: method.code,
            shipmentMethodOption: method.optionName,
          },
        }));
      });
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
