import { Component, Input } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';

@Component({
  selector: 'vc-line-items',
  templateUrl: './line-items.component.html',
  styleUrls: [
    './line-items.component.scss',
  ],
})

export class LineItemsComponent {
  @Input() cart?: Cart;

  update(): void {
    // TODO
  }

  remove(): void {
    // TODO
  }
}
