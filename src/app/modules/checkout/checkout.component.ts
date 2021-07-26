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
      .queryParams
      .subscribe(params => {
        this.cartId = params.cartId as string;
      });
  }

  ngOnDestroy(): void {
    this.routeWatcher.unsubscribe();
  }
}
