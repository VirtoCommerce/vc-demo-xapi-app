import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vc-order-shipping-address',
  templateUrl: './order-shipping-address.component.html',
  styleUrls: [
    './order-shipping-address.component.scss',
  ],
})
export class OrderShippingAddressComponent implements OnInit {
  constructor() {
    console.log('on init');
  }

  ngOnInit(): void {
    console.log('on init');
  }
}
