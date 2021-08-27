import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { filter, takeUntil } from 'rxjs/operators';

import { loadOrders } from 'src/app/store/order/orders.actions';
import { selectCurrentCustomer } from 'src/app/store/current-customer/current-customer.selectors';
import { selectOrders } from 'src/app/store/order/orders.selectors';
import { pageInfo, sortAscending, sortDescending } from './orders.constants';
import { nonNull } from 'src/app/helpers/nonNull';

@Component({
  selector: 'vc-orders',
  templateUrl: './orders.component.html',
  styleUrls: [
    './orders.component.scss',
  ],
})
export class OrdersComponent implements OnInit, OnDestroy {
  unsubscriber = new Subject();

  currentCustomer$ = this.store.select(selectCurrentCustomer);

  currentCustomerId!: string;

  orders$ = this.store.select(selectOrders);

  cursor = pageInfo.cursor;

  page = pageInfo.page;

  pageSize = pageInfo.pageSize;

  statuses = 'New Pending Paid Processing Cancelled Completed'.split(' ');

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

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.currentCustomer$.pipe(filter(nonNull), takeUntil(this.unsubscriber))
      .subscribe(x => this.currentCustomerId = x.userName !== 'Anonymous' ? x.id : '');

    this.loadItems();
  }

  onSearchChange(keyword: string): void {
    this.keyword = keyword;

    if (this.page > 1) {
      this.loadPage(1);
    }
    else {
      this.loadItems();
    }
  }

  onStatusChange(status: string | undefined): void {
    this.status = status;
    this.loadItems();
  }

  loadPage(page: number): void {
    this.cursor = (page * this.pageSize - this.pageSize).toString();
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
    const sort = this.getSortingExpression();
    this.store.dispatch(loadOrders({
      currentCustomerId: this.currentCustomerId,
      filter: this.keyword ?? '' + ' ' + (this.status ? `status:${this.status}` : ''),
      count: this.pageSize,
      cursor: this.cursor,
      sort,
    }));
  }

  private getSortingExpression(): string {
    return `${this.sort.column}:${this.sort.direction}`;
  }
}

interface SortInfo {
  column: string;
  direction: string;
}
