import { Component, Input } from '@angular/core';
import { OrderItem } from 'src/app/models/order.model';

@Component({
  selector: 'vc-order-gifts',
  templateUrl: './order-gifts.component.html',
  styleUrls: [
    './order-gifts.component.scss',
  ],
})
export class OrderGiftsComponent {
  @Input() gifts?: OrderItem[] | null;
}
