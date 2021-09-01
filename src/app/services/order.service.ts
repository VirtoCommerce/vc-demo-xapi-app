import { Injectable, OnDestroy } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ApolloQueryResult } from '@apollo/client/core';
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
        this.getOrderQuery(orderNumber)
          .pipe(takeUntil(this.unsubscriber))
          .subscribe(o => {
            if (!o.data.order) {
              observer.next();
              return;
            }

            const result: Order = {
              ...o.data.order,
              items: customMap(o.data.order.items?.filter(x => !x?.isGift), x => ({ ...x })),
              gifts: customMap(o.data.order.items?.filter(x => x?.isGift), x => ({ ...x })),
            };

            const shipment = o.data.order.shipments?.find(x => x != null);
            if (shipment) {
              result.shipment = {
                ...shipment,
                deliveryAddress: shipment.deliveryAddress
                  ? {
                    firstName: shipment.deliveryAddress.firstName,
                    lastName: shipment.deliveryAddress.lastName,
                    phone: shipment.deliveryAddress.phone,
                    email: shipment.deliveryAddress.email,
                    countryCode: shipment.deliveryAddress.countryCode,
                    countryName: shipment.deliveryAddress.countryName,
                    regionName: shipment.deliveryAddress.regionId,
                    postalCode: shipment.deliveryAddress.postalCode,
                    line1: shipment.deliveryAddress.line1,
                    line2: shipment.deliveryAddress.line2,
                  }
                  : undefined,
                logoUrl: shipment.shippingMethod?.logoUrl ?? null,
              };
            }

            const payment = o.data.order.inPayments?.find(x => x != null);
            if (payment) {
              result.payment = {
                ...payment,
                billingAddress: payment.billingAddress
                  ? {
                    firstName: payment.billingAddress.firstName,
                    lastName: payment.billingAddress.lastName,
                    phone: payment.billingAddress.phone,
                    email: payment.billingAddress.email,
                    countryCode: payment.billingAddress.countryCode,
                    countryName: payment.billingAddress.countryName,
                    regionName: payment.billingAddress.regionId,
                    postalCode: payment.billingAddress.postalCode,
                    line1: payment.billingAddress.line1,
                    line2: payment.billingAddress.line2,
                  }
                  : undefined,
                logoUrl: payment.paymentMethod?.logoUrl ?? null,
              };
            }

            observer.next(result);
          });
      });
    }

    private getOrderQuery(orderNumber: string): Observable<ApolloQueryResult<order>> {
      return this.apollo.query<order, orderVariables>({
        query: getOrderQuery,
        variables: {
          number: orderNumber,
          cultureName: this.baseVariables.cultureName,
        },
      });
    }

    ngOnDestroy(): void {
      this.unsubscriber.next(true);
      this.unsubscriber.unsubscribe();
    }
}
