import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PaymentMethodRecord } from 'src/app/models/cart.model';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'vc-payment-method-select',
  templateUrl: './payment-method-select.component.html',
  styleUrls: [
    './payment-method-select.component.scss',
  ],
})
export class PaymentMethodSelectComponent {
  constructor(
    public readonly activeModal: NgbActiveModal
  ) { }

  faTimes = faTimes;

  faCheck = faCheck;

  @Input() methods: PaymentMethodRecord[] = [];

  @Output() methodSelected = new EventEmitter<PaymentMethodRecord>();

  selectMethod(method: PaymentMethodRecord): void {
    this.methods.forEach(function (x) {
      x.isActive = false;
    });
    method.isActive = true;
    this.methodSelected.emit(method);
  }
}
