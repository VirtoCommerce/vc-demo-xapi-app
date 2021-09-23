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

  pageSize = pageInfo.pageSize;

  currentPage = 1;

  unsubscriber = new Subject();

  constructor(private readonly store: Store) { }

  onPageChange(newPage: number) {
    const after = (newPage - 1) * this.pageSize as unknown as string;
    this.getMembers(this.pageSize, after);
    this.currentPage = newPage;
  }

  getMembers(
    first?: number,
    after?: string,
    searchPhrase?: string,
    sort? : string
  ): void {
    this.curentCustomerOrganization$
      .pipe(filter(nonNull), takeUntil(this.unsubscriber))
      .subscribe(value => {
        this.curentCustomerOrganizationId = value.id;
        this.store.dispatch(getOrganizationMembers({
          data: {
            id: this.curentCustomerOrganizationId,
            first,
            after,
            searchPhrase,
            sort,
          },
        }));
      });
  }

  ngOnInit(): void {
    this.getMembers(pageInfo.pageSize);
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.unsubscribe();
  }
}
