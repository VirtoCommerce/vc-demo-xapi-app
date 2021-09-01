import { Component, Input } from '@angular/core';
import { Order } from 'src/app/models/order.model';

@Component({
  selector: 'vc-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: [
    './order-summary.component.scss',
    '../../order-details.component.scss',
  ],
})
export class OrderSummaryComponent {
  @Input() order?: Order | null;

  @Input() isDetailsMode = true;
}
