import { selectCurrentCustomerState } from './../../store/current-customer/current-customer.selectors';
import { Store } from '@ngrx/store';
import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'vc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [
    './navbar.component.scss',
  ],
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  companyName: string | null | undefined =  null ;

  unsubscriber = new Subject();

  constructor(public router: Router, private readonly store: Store) {
  }

  ngAfterViewInit(): void {
    this.store.select(selectCurrentCustomerState)
      .pipe(takeUntil(this.unsubscriber))
      .subscribe(currentCustomerState => {
        this.companyName = currentCustomerState.user?.organization?.name;
      });
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
