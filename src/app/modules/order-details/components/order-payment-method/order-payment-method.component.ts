import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vc-order-payment-method',
  templateUrl: './order-payment-method.component.html',
  styleUrls: [
    './order-payment-method.component.scss',
  ],
})
export class OrderPaymentMethodComponent implements OnInit {
  constructor() {
    console.log('on init');
  }

  ngOnInit(): void {
    console.log('on init');
  }
}
