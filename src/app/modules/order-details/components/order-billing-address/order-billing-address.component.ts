import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vc-order-billing-address',
  templateUrl: './order-billing-address.component.html',
  styleUrls: [
    './order-billing-address.component.scss',
  ],
})
export class OrderBillingAddressComponent implements OnInit {
  constructor() {
    console.log('on init');
  }

  ngOnInit(): void {
    console.log('on init');
  }
}
