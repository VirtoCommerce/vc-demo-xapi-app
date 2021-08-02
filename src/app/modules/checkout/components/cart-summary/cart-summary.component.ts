import { Component, Input } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';

@Component({
  selector: 'vc-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: [
    './cart-summary.component.scss',
  ],
})
export class CartSummaryComponent {
  @Input() cart?: Cart | null;
}
