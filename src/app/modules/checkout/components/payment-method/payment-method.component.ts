import { Component, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Cart, PaymentMethod, PaymentMethodRecord } from 'src/app/models/cart.model';
import { PaymentMethodSelectComponent } from '../payment-method-select/payment-method-select.component';

@Component({
  selector: 'vc-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: [
    './payment-method.component.scss',
  ],
})
export class PaymentMethodComponent implements OnInit {
  constructor(
    private readonly modalService: NgbModal,
    private readonly store: Store
  ) { }

  ngOnInit(): void {
    this.availablePaymentMethods = this.cart?.availablePaymentMethods;
  }

  @Input() cart?: Cart | null;

  unsubscriber = new Subject();

  availablePaymentMethods?: PaymentMethod[] | null;

  @Output() paymentMethod?: PaymentMethodRecord | null;

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
      });
  }
}
