import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { nonNull } from 'src/app/helpers/nonNull';
import { selectCurrentCustomerOrganization } from 'src/app/store/current-customer/current-customer.selectors';
import { getOrganizationMembers } from '../../store/members.actions';
import { selectMembers } from '../../store/members.selectors';

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

  curentCustomerOrganizationId = '';

  unsubscriber = new Subject();

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.curentCustomerOrganization$
      .pipe(filter(nonNull), takeUntil(this.unsubscriber))
      .subscribe(value => {
        this.curentCustomerOrganizationId = value.id;
        this.store.dispatch(getOrganizationMembers({
          data: {
            id: this.curentCustomerOrganizationId,
          },
        }));
      });
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.unsubscribe();
  }
}
