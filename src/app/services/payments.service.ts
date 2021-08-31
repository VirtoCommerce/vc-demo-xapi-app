import { Injectable, OnDestroy } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import getPaymentsQuery from '../graphql/queries/get-payments.graphql';

import { payments, paymentsVariables } from '../graphql/types/payments';
import { PaymentResult } from '../models/payment.model';
import { customMap } from '../store/cart/cart.reducer';

@Injectable({
  providedIn: 'root',
})

export class PaymentsService implements OnDestroy {
  unsubscriber: Subject<boolean> = new Subject<boolean>();

  constructor(private readonly apollo: Apollo) { }

  searchPayments(variables: paymentsVariables): Observable<PaymentResult> {
    return new Observable<PaymentResult>(observer => {
      this.apollo.query<payments, paymentsVariables>({
        query: getPaymentsQuery,
        variables,
      })
        .pipe(takeUntil(this.unsubscriber))
        .subscribe(x => {
          const result: PaymentResult = {
            items: customMap(x.data.payments?.items, y => ({ ...y })),
            totalCount: x.data.payments?.totalCount ?? 0,
          };

          observer.next(result);
        });
    });
  }

  ngOnDestroy(): void {
    this.unsubscriber.next(true);
    this.unsubscriber.unsubscribe();
  }
}
