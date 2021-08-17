import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { selectCurrentCustomerOrganization } from 'src/app/store/current-customer/current-customer.selectors';
import { getAddressess, setEditAddress, setSelectedAddress } from './store/addresses.actions';
import { selectOrganizationAddresses } from './store/addresses.selectors';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { sortAscending, sortDescending, pageInfo } from './addresses.constants';
import { filter, takeUntil } from 'rxjs/operators';
import { nonNull } from 'src/app/helpers/nonNull';
import { Address } from 'src/app/models/address.model';
import { Router } from '@angular/router';

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

  cursor = pageInfo.cursor;

  page = pageInfo.page;

  pageSize = pageInfo.pageSize;

  faChevronLeft = faChevronLeft;

  faChevronRight = faChevronRight;

  sortDescending = sortDescending;

  sortAscending = sortAscending;

  sortDirection = this.sortDescending;

  constructor(private readonly store: Store, private readonly router: Router) { }

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

  editAddress(address: Address): void {
    this.store.dispatch(setSelectedAddress({ address }));
    this.store.dispatch(setEditAddress({ address }));
    this.router.navigate([
      '/addresses',
      address.id,
    ]).catch(error => {
      throw new Error(error);
    });
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
