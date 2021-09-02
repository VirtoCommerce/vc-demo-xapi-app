import { Component, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Cart, Payment, PaymentMethod, PaymentMethodRecord } from 'src/app/models/cart.model';
import { addOrUpdatePayment } from 'src/app/store/cart/cart.actions';
import { PaymentMethodSelectComponent } from '../payment-method-select/payment-method-select.component';

@Component({
  selector: 'vc-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: [
    './payment-method.component.scss',
  ],
})
export class PaymentMethodComponent implements OnInit {
  @Input() cart?: Cart | null;

  unsubscriber = new Subject();

  availablePaymentMethods?: PaymentMethod[] | null;

  @Output() paymentMethod?: PaymentMethodRecord | null;

  constructor(
    private readonly modalService: NgbModal,
    private readonly store: Store
  ) { }

  get payment(): Payment {
    return this.cart?.payments?.length ? this.cart.payments[0] : {};
  }

  openChangePaymentMethod(): void {
    const modal = this.modalService.open(PaymentMethodSelectComponent, {
      modalDialogClass: 'modal-custom-size-2 modal-position',
    });
    const methodsComponent = modal.componentInstance as PaymentMethodSelectComponent;

    methodsComponent.methods = this.cart?.availablePaymentMethods?.map<PaymentMethodRecord>(x => {
      return {
        ...x,
        isActive: this.paymentMethod?.code === x.code && this.paymentMethod?.paymentMethodType === x.paymentMethodType,
      };
    }) ?? [];

    methodsComponent.methodSelected
      .pipe(takeUntil(this.unsubscriber))
      .subscribe((method: PaymentMethodRecord) => {
        this.paymentMethod = method;

        this.store.dispatch(addOrUpdatePayment({
          payment: {
            ...this.payment,
            paymentGatewayCode: method.code,
          },
        }));
      });
  }

  ngOnInit(): void {
    this.availablePaymentMethods = this.cart?.availablePaymentMethods;
  }
}
