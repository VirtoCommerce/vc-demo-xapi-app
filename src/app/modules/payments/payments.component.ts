import { Component, OnDestroy, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { selectCurrentCustomer } from 'src/app/store/current-customer/current-customer.selectors';
import { PaymentResult } from 'src/app/models/payment.model';
import { PaymentsService } from 'src/app/services/payments.service';
import { getSortingExpression, pageInfo, sortAscending, sortDescending, SortInfo } from 'src/app/helpers/listBrowsing';
import { nonNull } from 'src/app/helpers/nonNull';

const pageSize = 8;

@Component({
  selector: 'vc-payments',
  templateUrl: './payments.component.html',
  styleUrls: [
    './payments.component.scss',
    '../orders/orders.component.scss',
  ],
})
export class PaymentsComponent implements OnInit, OnDestroy {
  unsubscriber = new Subject();

  currentCustomer$ = this.store.select(selectCurrentCustomer);

  currentCustomerId!: string;

  payments: PaymentResult = {
    items: [],
    totalCount: 0,
  };

  cursor = pageInfo.cursor;

  page = pageInfo.page;

  pageSize = pageSize;

  statuses = 'Authorized Cancelled Custom New Paid PartiallyRefunded Pending Refunded Voided'.split(' ');

  faChevronLeft = faChevronLeft;

  faChevronRight = faChevronRight;

  sortDescending = sortDescending;

  sortAscending = sortAscending;

  sort: SortInfo = {
    column: 'createdDate',
    direction: sortDescending,
  };

  private keyword: string | undefined;

  private status: string | undefined;

  constructor(private readonly paymentsService: PaymentsService, private readonly store: Store) { }

  ngOnInit(): void {
    this.currentCustomer$.pipe(filter(nonNull), takeUntil(this.unsubscriber))
      .subscribe(x => {
        this.currentCustomerId = x.userName !== 'Anonymous' ? x.id : '';
        this.loadItems();
      });
  }

  onSearchChange(keyword: string): void {
    this.keyword = keyword;
    this.loadPage(1);
  }

  onStatusChange(status: string | undefined): void {
    this.status = status;
    this.loadPage(1);
  }

  loadPage(page: number): void {
    this.cursor = (page * pageSize - pageSize).toString();
    this.loadItems();
    this.page = page;
  }

  applySorting(column: string): void {
    if (this.sort.column === column) {
      this.sort.direction = this.sort.direction === sortDescending ? sortAscending : sortDescending;
    }
    else {
      this.sort.column = column;
      this.sort.direction = sortDescending;
    }

    this.loadItems();
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }

  private loadItems(): void {
    const statusFilter = this.status ? `status:${this.status}` : '';
    this.paymentsService.searchPayments({
      // / userId: this.currentCustomerId ?? '',
      userId: '', // Security workaround for demo purposes. TODO: prepare demo data and pass currentCustomerId
      filter: `${this.keyword ?? ''} ${statusFilter}`,
      first: pageSize,
      after: this.cursor,
      sort: getSortingExpression(this.sort),
    })
      .pipe(takeUntil(this.unsubscriber))
      .subscribe(x => {
        if (x != null) {
          this.payments = x;
        }
      });
  }
}
