import { Injectable, OnDestroy } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ApolloQueryResult } from '@apollo/client/core';
import { forkJoin, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { customMap } from '../helpers/custom-map';

import getOrderQuery from 'src/app/graphql/queries/get-order.graphql';
import getPaymentMethodsQuery from 'src/app/graphql/queries/get-payment-methods.graphql';
import getShippingMethodsQuery from 'src/app/graphql/queries/get-shipment-methods.graphql';

import { cartVariables } from '../graphql/types/cart';
import { order, orderVariables } from 'src/app/graphql/types/order';
import { paymentMethods, paymentMethodsVariables } from 'src/app/graphql/types/paymentMethods';
import { shippingMethods, shippingMethodsVariables } from 'src/app/graphql/types/shippingMethods';

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
        forkJoin(
          [
            this.getOrderQuery(orderNumber),
            this.getShippingMethodsQuery(),
            this.getPaymentMethodsQuery(),
          ]
        )
          .pipe(takeUntil(this.unsubscriber))
          .subscribe(([
            o,
            s,
            p,
          ]) => {
            if (!o.data.order) {
              observer.next();
              return;
            }

            const order = o.data.order;

            const result: Order = {
              ...order,
              items: customMap(order.items, x => ({ ...x })),
              gifts: customMap(order.items, x => ({ ...x })),
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
                iconUrl: s.data.shippingMethods?.items?.find(x=>x?.code === shipment.shipmentMethodCode)?.logoUrl ??
                  null,
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
                iconUrl: p.data.paymentMethods?.items?.find(x=>x?.code === payment.paymentMethod?.code)?.logoUrl ??
                  null,
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

    private getShippingMethodsQuery(): Observable<ApolloQueryResult<shippingMethods>> {
      return this.apollo.query<shippingMethods, shippingMethodsVariables>({
        query: getShippingMethodsQuery,
        variables: {
          storeId: this.baseVariables.storeId,
        },
      });
    }

    private getPaymentMethodsQuery(): Observable<ApolloQueryResult<paymentMethods>> {
      return this.apollo.query<paymentMethods, paymentMethodsVariables>({
        query: getPaymentMethodsQuery,
        variables: {
          storeId: this.baseVariables.storeId,
        },
      });
    }

    ngOnDestroy(): void {
      this.unsubscriber.next(true);
      this.unsubscriber.unsubscribe();
    }
}
