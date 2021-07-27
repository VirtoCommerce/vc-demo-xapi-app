import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'vc-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: [
    './checkout.component.scss',
  ],
})
export class CheckoutComponent implements OnInit, OnDestroy {
  public cartId!: string;

  routeWatcher!: Subscription;

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeWatcher = this.route
      .queryParamMap
      .subscribe(params => {
        this.cartId = params.get('cartId')!;
      });
  }

  ngOnDestroy(): void {
    this.routeWatcher.unsubscribe();
  }
}
