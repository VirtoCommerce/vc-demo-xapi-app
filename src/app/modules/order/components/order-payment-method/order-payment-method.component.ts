import { Component, Input } from '@angular/core';
import { OrderPayment } from 'src/app/models/order.model';

@Component({
  selector: 'vc-order-payment-method',
  templateUrl: './order-payment-method.component.html',
  styleUrls: [
    './order-payment-method.component.scss',
    '../../order.component.scss',
  ],
})
export class OrderPaymentMethodComponent {
  @Input() payment?: OrderPayment | null;
}
