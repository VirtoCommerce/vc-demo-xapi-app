import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Address } from 'src/app/models/address.model';
import { selectCurrentCustomerOrganization } from 'src/app/store/current-customer/current-customer.selectors';
import { getAddressess } from './store/addresses.actions';
import { selectOrganizationAddresses } from './store/addresses.selectors';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

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

  curentCustomerOrganizationId?: string;

  addresses?: Address[] | null;

  totalCount?: number | null;

  cursor = '0';

  page = 1;

  pageSize = 6;

  faChevronLeft = faChevronLeft;

  faChevronRight = faChevronRight;

  sortDescending = 'desc';

  sortAscending = 'asc';

  sortDirection = this.sortDescending;

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.curentCustomerOrganization$.subscribe(value => this.curentCustomerOrganizationId = value?.id);
    const sortigExpression = this.getSortingExpression();
    this.loadAddresses(this.curentCustomerOrganizationId!, this.pageSize, this.cursor, sortigExpression);
    this.store.select(selectOrganizationAddresses)
      .pipe(takeUntil(this.unsubscriber))
      .subscribe(addresses => {
        this.addresses = addresses?.items;
        this.totalCount = addresses?.totalCount;
      });
  }

  loadPage(page: number): void {
    this.cursor = (page * this.pageSize - this.pageSize).toString();
    const sortigExpression = this.getSortingExpression();
    this.loadAddresses(this.curentCustomerOrganizationId!, this.pageSize, this.cursor, sortigExpression);
    this.page = page;
  }

  applySorting(): void {
    this.sortDirection = this.invertSortDirection(this.sortDirection);
    const sortigExpression = this.getSortingExpression();
    this.loadAddresses(this.curentCustomerOrganizationId!, this.pageSize, this.cursor, sortigExpression);
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
