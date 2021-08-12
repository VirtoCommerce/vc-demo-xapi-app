import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Address } from 'src/app/models/address.model';
import { PageInfo } from 'src/app/models/pageInfo.model';
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

  pageInfo?: PageInfo;

  page = 1;

  pageSize = 6;

  faChevronLeft = faChevronLeft;

  faChevronRight = faChevronRight;

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.curentCustomerOrganization$.subscribe(value => this.curentCustomerOrganizationId = value?.id);
    this.loadAddresses(this.curentCustomerOrganizationId!, this.pageSize);
    this.store.select(selectOrganizationAddresses)
      .pipe(takeUntil(this.unsubscriber))
      .subscribe(addresses => {
        this.addresses = addresses?.items;
        this.totalCount = addresses?.totalCount;
        this.pageInfo = addresses?.pageInfo;
      });
  }

  loadAddresses(id: string, count?: number, cursor?: string, sort?: string): void {
    this.store.dispatch(getAddressess({
      id,
      count,
      cursor,
      sort,
    }));
  }

  loadPage(page: number): void {
    const cursor = (page * this.pageSize - this.pageSize).toString();
    this.loadAddresses(this.curentCustomerOrganizationId!, this.pageSize, cursor!);
    this.page = page;
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
