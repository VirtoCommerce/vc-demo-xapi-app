import { Injectable, OnDestroy } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ApolloQueryResult } from '@apollo/client/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { customMap } from '../helpers/custom-map';
import getPaymentsQuery from '../graphql/queries/get-payments.graphql';
import { payments, paymentsVariables } from '../graphql/types/payments';
import { PaymentsResult } from '../models/payments.model';

import getPaymentQuery from 'src/app/graphql/queries/get-payment.graphql';
import { payment } from '../graphql/types/payment';
import { Payment } from '../models/payments.model';

@Injectable({
  providedIn: 'root',
})

export class PaymentsService implements OnDestroy {
  unsubscriber: Subject<boolean> = new Subject<boolean>();

  constructor(private readonly apollo: Apollo) { }

  searchPayments(variables: paymentsVariables): Observable<PaymentsResult> {
    return new Observable<PaymentsResult>(observer => {
      this.apollo.query<payments, paymentsVariables>({
        query: getPaymentsQuery,
        variables,
      })
        .pipe(takeUntil(this.unsubscriber))
        .subscribe(x => {
          const result: PaymentsResult = {
            items: customMap(x.data.payments?.items, y => ({ ...y })),
            totalCount: x.data.payments?.totalCount ?? 0,
          };

          observer.next(result);
        });
    });
  }

  getPayment(number: string, userId: string): Observable<Payment | null> {
    const queryFilter = {
      filter: `number:${number}`,
      userId: userId,
      after: '0',
      first: 1,
    };
    return new Observable<Payment>(observer => {
      this.getPaymentQuery(queryFilter)
        .pipe(takeUntil(this.unsubscriber))
        .subscribe(x => {
          if (!x.data.payments?.items?.length || !x.data.payments.items[0]) {
            observer.next();
            return;
          }

          observer.next({
            ...x.data.payments.items[0],
          });
        });
    });
  }

  private getPaymentQuery(variables: paymentsVariables): Observable<ApolloQueryResult<payment>> {
    return this.apollo.query<payment, paymentsVariables>({
      query: getPaymentQuery,
      variables,
    });
  }

  ngOnDestroy(): void {
    this.unsubscriber.next(true);
    this.unsubscriber.unsubscribe();
  }
}
