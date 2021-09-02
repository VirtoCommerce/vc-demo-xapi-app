import { filter, takeUntil } from 'rxjs/operators';
import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';

import { nonNull } from 'src/app/helpers/nonNull';
import { Payment } from 'src/app/models/payments.model';
import { PaymentsService } from 'src/app/services/payments.service';
import { selectCurrentCustomer } from 'src/app/store/current-customer/current-customer.selectors';

@Component({
  selector: 'vc-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: [
    './payment-details.component.scss',
  ],
})
export class PaymentDetailsComponent implements OnInit, OnDestroy {
  unsubscriber = new Subject();

  payment?: Payment;

  fieldsToDisplay?: Field[];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly paymentsService: PaymentsService,
    private readonly store: Store,
    @Inject(LOCALE_ID) private readonly locale: string
  ) { }

  ngOnInit(): void {
    const number = this.route.snapshot.paramMap.get('number') as string;

    this.store.select(selectCurrentCustomer)
      .pipe(filter(nonNull), takeUntil(this.unsubscriber))
      .subscribe(state => {
        let currentCustomerId = state.userName !== 'Anonymous' ? state.id : '';
        // Security workaround for demo purposes. TODO: prepare demo data and pass currentCustomerId
        currentCustomerId = '';

        // Load payment
        this.paymentsService.getPayment(number, currentCustomerId)
          .pipe(takeUntil(this.unsubscriber))
          .subscribe(x => {
            if (!x) {
              return;
            }

            this.payment = x;

            const none = '-';
            this.fieldsToDisplay = [
              {
                label: 'Payment number',
                value: x.number,
              },
              {
                label: 'Amount',
                value: x.sum?.formattedAmount,
              },
              {
                label: 'Payment fees',
                value: x.price?.formattedAmount,
              },
              {
                label: 'Status',
                value: x.status ?? none,
              },
              {
                label: 'Payment date',
                value: formatDate(x.createdDate, 'MMM d, y h:mm a', this.locale),
              },
              {
                label: 'Payment method',
                value: x.gatewayCode ?? none,
              },
              {
                label: 'Purpose',
                value: x.purpose ?? none,
              },
              {
                label: 'Comment',
                value: x.comment ?? none,
              },
            ];
          });
      });
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}

interface Field {
  label: string;
  value?: string;
}
