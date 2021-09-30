import { Member } from 'src/app/models/member.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { nonNull } from 'src/app/helpers/nonNull';
import { selectCurrentCustomerOrganization } from 'src/app/store/current-customer/current-customer.selectors';
import { deleteMember, getOrganizationMembers } from '../../store/members.actions';
import { membersCount, selectMembers } from '../../store/members.selectors';
import { FilterValues } from './members-list-filter-bar/filter-values.model';
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

  readonly firstPage = 1;

  currentPage = this.firstPage;

  after = pageInfo.cursor;

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

  onFilterChange(data: FilterValues): void {
    this.searchPhrase = `${data.selectInputValue} ${data.searchFilterValue}`;
    this.onPageChange(this.firstPage);
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

  onDeleteMember(member: Member): void {
    this.deleteMember({
      userName: member.userName,
      memberId: member.id as string,
    });
    this.reset();
  }

  private reset(): void {
    this.currentPage = this.firstPage;
    this.after = pageInfo.cursor;
    this.searchPhrase = '';
    this.nameSortDirection = this.sortAscending;
  }

  private invertSortDirection(sortDirection: string): string {
    return sortDirection === this.sortAscending ? this.sortDescending : this.sortAscending;
  }

  private getSortingExpression(): string {
    return `name:${this.nameSortDirection}`;
  }

  deleteMember(memberData: {userName: string, memberId: string}): void {
    if (confirm('Do you really want delete companie`s member?')) {
      this.store.dispatch(deleteMember(memberData));
    }
  }

  ngOnInit(): void {
    this.reset();
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
