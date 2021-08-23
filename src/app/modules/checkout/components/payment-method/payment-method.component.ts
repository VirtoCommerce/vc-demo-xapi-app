import { Component, Input, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { Cart, Shipment, PaymentMethodRecord } from 'src/app/models/cart.model';

@Component({
  selector: 'vc-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: [
    './payment-method.component.scss',
    '../../checkout.component.scss',
  ],
})
export class PaymentMethodComponent implements OnDestroy {
  @Input() cart?: Cart | null;

  paymentMethod?: PaymentMethodRecord | null;

  unsubscriber = new Subject();

  constructor(
    private readonly modalService: NgbModal,
    private readonly store: Store
  ) { }

  get shipment(): Shipment {
    return this.cart?.shipments?.length ? this.cart.shipments[0] : {};
  }

  openChangePaymentMethod(): void {

    /* Method still left*/
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
