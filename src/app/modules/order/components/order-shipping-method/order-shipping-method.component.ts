import { Component, Input } from '@angular/core';
import { OrderShipment } from 'src/app/models/order.model';

@Component({
  selector: 'vc-order-shipping-method',
  templateUrl: './order-shipping-method.component.html',
  styleUrls: [
    './order-shipping-method.component.scss',
    '../../order.component.scss',
  ],
})
export class OrderShippingMethodComponent {
  @Input() shipment?: OrderShipment | null;
}
