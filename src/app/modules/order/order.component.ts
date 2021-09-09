import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'vc-order',
  templateUrl: './order.component.html',
  styleUrls: [
    './order.component.scss',
  ],
})
export class OrderComponent implements OnInit, OnDestroy {
  unsubscriber = new Subject();

  isDetailsMode = true;

  orderNumber?: string | null;

  order: Order = {};

  constructor(
    private readonly route: ActivatedRoute,
    private readonly orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.route.data
      .pipe(takeUntil(this.unsubscriber))
      .subscribe(data=> {
        this.isDetailsMode = data?.isDetailsMode as boolean ?? true;
      });

    this.route
      .paramMap
      .pipe(takeUntil(this.unsubscriber))
      .subscribe(params => {
        if (params.has('number')) {
          this.orderNumber = params.get('number') as string;

          // Load order
          this.orderService.getOrder(this.orderNumber)
            .pipe(takeUntil(this.unsubscriber))
            .subscribe(order => {
              if (order != null) {
                this.order = order;
              }
            });
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
