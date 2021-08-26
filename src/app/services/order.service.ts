import { Injectable, OnDestroy } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { customMap } from '../helpers/custom-map';

import getOrderQuery from 'src/app/graphql/queries/get-order.graphql';
import { cartVariables } from '../graphql/types/cart';
import { order, orderVariables } from 'src/app/graphql/types/order';

import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root',
})

export class OrderService implements OnDestroy {
  baseVariables: cartVariables = {
    storeId: 'Electronics',
    currencyCode: 'USD',
    cultureName: 'en-US',
  }

  unsubscriber: Subject<boolean> = new Subject<boolean>();

  constructor(
      private readonly apollo: Apollo
  ) { }

  getOrder(orderNumber: string): Observable<Order | null> {
    return new Observable<Order>(observer => {
      this.apollo.query<order, orderVariables>({
        query: getOrderQuery,
        variables: {
          number: orderNumber,
          cultureName: this.baseVariables.cultureName,
        },
      })
        .pipe(takeUntil(this.unsubscriber))
        .subscribe(o => {
          if (!o.data.order) {
            observer.next();
            return;
          }

          const order = o.data.order;

          const result: Order = {
            ...order,
            items: customMap(order.items, x => ({ ...x })),
          };

          const shipment = order.shipments?.find(x => x != null);
          if (shipment) {
            result.shipment = {
              ...shipment,
              deliveryAddress: {
                firstName: shipment.deliveryAddress?.firstName,
                lastName: shipment.deliveryAddress?.lastName,
                phone: shipment.deliveryAddress?.phone,
                email: shipment.deliveryAddress?.email,
                countryCode: shipment.deliveryAddress?.countryCode,
                countryName: shipment.deliveryAddress?.countryName,
                regionName: shipment.deliveryAddress?.regionId,
                postalCode: shipment.deliveryAddress?.postalCode,
                line1: shipment.deliveryAddress?.line1,
                line2: shipment.deliveryAddress?.line2,
              },
            };
          }

          const payment = order.inPayments?.find(x => x != null);
          if (payment) {
            result.payment = {
              ...payment,
              billingAddress: {
                firstName: payment.billingAddress?.firstName,
                lastName: payment.billingAddress?.lastName,
                phone: payment.billingAddress?.phone,
                email: payment.billingAddress?.email,
                countryCode: payment.billingAddress?.countryCode,
                countryName: payment.billingAddress?.countryName,
                regionName: payment.billingAddress?.regionId,
                postalCode: payment.billingAddress?.postalCode,
                line1: payment.billingAddress?.line1,
                line2: payment.billingAddress?.line2,
              },
            };
          }

          observer.next(result);
        });
    });
  }

  ngOnDestroy(): void {
    this.unsubscriber.next(true);
    this.unsubscriber.unsubscribe();
  }
}
