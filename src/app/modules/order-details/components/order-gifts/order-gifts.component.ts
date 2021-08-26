import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vc-order-gifts',
  templateUrl: './order-gifts.component.html',
  styleUrls: [
    './order-gifts.component.scss',
  ],
})
export class OrderGiftsComponent implements OnInit {
  constructor() {
    console.log('on init');
  }

  ngOnInit(): void {
    console.log('on init');
  }
}
