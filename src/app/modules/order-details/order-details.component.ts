import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'vc-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: [
    './order-details.component.scss',
  ],
})
export class OrderDetailsComponent implements OnInit, OnDestroy {
  unsubscriber = new Subject();

  constructor() {
    console.log('on init');
  }

  ngOnInit(): void {
    console.log('on init');
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
