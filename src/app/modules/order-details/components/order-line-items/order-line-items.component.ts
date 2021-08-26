import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vc-order-line-items',
  templateUrl: './order-line-items.component.html',
  styleUrls: [
    './order-line-items.component.scss',
  ],
})
export class OrderLineItemsComponent implements OnInit {
  constructor() {
    console.log('on init');
  }

  ngOnInit(): void {
    console.log('on init');
  }
}
