import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vc-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: [
    './order-summary.component.scss',
  ],
})
export class OrderSummaryComponent implements OnInit {
  constructor() {
    console.log('on init');
  }

  ngOnInit(): void {
    console.log('on init');
  }
}
