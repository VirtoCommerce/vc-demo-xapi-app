import { Component, Input } from '@angular/core';
import { Address } from 'src/app/models/address.model';

@Component({
  selector: 'vc-order-details-address',
  templateUrl: './order-details-address.component.html',
  styleUrls: [
    './order-details-address.component.scss',
    '../../order-details.component.scss',
  ],
})
export class OrderDetailsAddressComponent {
  @Input() address?: Address | null;

  @Input() isShippingMode = true;
}
