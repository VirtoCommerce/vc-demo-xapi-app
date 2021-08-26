import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vc-order-shipping-method',
  templateUrl: './order-shipping-method.component.html',
  styleUrls: [
    './order-shipping-method.component.scss',
  ],
})
export class OrderShippingMethodComponent implements OnInit {
  constructor() {
    console.log('on init');
  }

  ngOnInit(): void {
    console.log('on init');
  }
}
