import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { nonNull } from 'src/app/helpers/nonNull';
import { selectCurrentCustomerOrganization } from 'src/app/store/current-customer/current-customer.selectors';
import { getOrganizationMembers } from '../../store/members.actions';
import { membersCount, selectMembers } from '../../store/members.selectors';
import { pageInfo } from './members-list.constants';

@Component({
  selector: 'vc-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: [
    './members-list.component.scss',
  ],
})
export class MembersListComponent implements OnInit, OnDestroy {
  curentCustomerOrganization$ = this.store.select(selectCurrentCustomerOrganization);

  members$ = this.store.select(selectMembers);

  totalCount$ = this.store.select(membersCount);

  curentCustomerOrganizationId = '';

  readonly pageSize = pageInfo.pageSize;

  readonly sortAscending = pageInfo.sortAscending;

  readonly sortDescending = pageInfo.sortDescending;

  currentPage = 1;

  after = '0';

  searchPhrase = '';

  nameSortDirection = this.sortAscending;

  unsubscriber = new Subject();

  constructor(private readonly store: Store) {}

  onPageChange(newPage: number): void {
    this.after = ((newPage - 1) * this.pageSize).toString();
    this.getMembers();
    this.currentPage = newPage;
  }

  onChangeSortDirection(): void {
    this.nameSortDirection = this.invertSortDirection(this.nameSortDirection);
    this.getMembers();
  }

  getMembers(): void {
    this.store.dispatch(
      getOrganizationMembers({
        data: {
          id: this.curentCustomerOrganizationId,
          first: this.pageSize,
          after: this.after,
          searchPhrase: this.searchPhrase,
          sort: this.getSortingExpression(),
        },
      })
    );
  }

  private invertSortDirection(sortDirection: string): string {
    return sortDirection === this.sortAscending ? this.sortDescending : this.sortAscending;
  }

  private getSortingExpression(): string {
    return `name:${this.nameSortDirection}`;
  }

  ngOnInit(): void {
    this.curentCustomerOrganization$.pipe(filter(nonNull), takeUntil(this.unsubscriber)).subscribe(value => {
      this.curentCustomerOrganizationId = value.id;
      this.getMembers();
    });
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.unsubscribe();
  }
}