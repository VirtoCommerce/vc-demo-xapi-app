import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { nonNull } from 'src/app/helpers/nonNull';
import { selectCurrentCustomerOrganization } from 'src/app/store/current-customer/current-customer.selectors';
import { getOrganizationMembers } from '../../store/members.actions';
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

  pageSize = pageInfo.pageSize;

  currentPage = 1;

  unsubscriber = new Subject();

  constructor(private readonly store: Store) {}

  onPageChange(newPage: number): void {
    const after = ((newPage - 1) * this.pageSize).toString();
    this.getMembers(this.pageSize, after);
    this.currentPage = newPage;
  }

  onFilterChange(data: FilterValues): void {
    console.log(data);
  }

  getMembers(first?: number, after?: string, searchPhrase?: string, sort?: string): void {
    this.store.dispatch(
      getOrganizationMembers({
        data: {
          id: this.curentCustomerOrganizationId,
          first,
          after,
          searchPhrase,
          sort,
        },
      })
    );
  }

  ngOnInit(): void {
    this.curentCustomerOrganization$.pipe(filter(nonNull), takeUntil(this.unsubscriber)).subscribe(value => {
      this.curentCustomerOrganizationId = value.id;
      this.getMembers(this.pageSize);
    });
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.unsubscribe();
  }
}
