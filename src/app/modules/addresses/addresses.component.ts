import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { selectCurrentCustomerOrganization } from 'src/app/store/current-customer/current-customer.selectors';
import { getAddressess } from './store/addresses.actions';
import { selectOrganizationAddresses } from './store/addresses.selectors';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { pageSize } from './addresses.constants';
import { filter, takeUntil } from 'rxjs/operators';
import { nonNull } from 'src/app/helpers/nonNull';

@Component({
  selector: 'vc-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: [
    './addresses.component.scss',
  ],
})
export class AddressesComponent implements OnInit, OnDestroy {
  unsubscriber = new Subject();

  curentCustomerOrganization$ = this.store.select(selectCurrentCustomerOrganization);

  organizationAddresses$ = this.store.select(selectOrganizationAddresses);

  curentCustomerOrganizationId!: string;

  cursor = '0';

  page = 1;

  pageSize = pageSize;

  faChevronLeft = faChevronLeft;

  faChevronRight = faChevronRight;

  sortDescending = 'desc';

  sortAscending = 'asc';

  sortDirection = this.sortDescending;

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.curentCustomerOrganization$.pipe(filter(nonNull), takeUntil(this.unsubscriber))
      .subscribe(value => this.curentCustomerOrganizationId = value?.id);
    const sortigExpression = this.getSortingExpression();
    this.loadAddresses(this.curentCustomerOrganizationId, this.pageSize, this.cursor, sortigExpression);
  }

  loadPage(page: number): void {
    this.cursor = (page * this.pageSize - this.pageSize).toString();
    const sortigExpression = this.getSortingExpression();
    this.loadAddresses(this.curentCustomerOrganizationId, this.pageSize, this.cursor, sortigExpression);
    this.page = page;
  }

  applySorting(): void {
    this.sortDirection = this.invertSortDirection(this.sortDirection);
    const sortigExpression = this.getSortingExpression();
    this.loadAddresses(this.curentCustomerOrganizationId, this.pageSize, this.cursor, sortigExpression);
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }

  private loadAddresses(id: string, count?: number, cursor?: string, sort?: string): void {
    this.store.dispatch(getAddressess({
      id,
      count,
      cursor,
      sort,
    }));
  }

  private invertSortDirection(sortDirection: string): string {
    return sortDirection === this.sortAscending ? this.sortDescending : this.sortAscending;
  }

  private getSortingExpression(): string {
    return `firstName:${this.sortDirection};lastName:${this.sortDirection}`;
  }
}
