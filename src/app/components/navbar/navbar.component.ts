import { selectCurrentCustomerOrganization } from './../../store/current-customer/current-customer.selectors';
import { Store } from '@ngrx/store';
import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'vc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [
    './navbar.component.scss',
  ],
})
export class NavbarComponent {
  curentCustomerOrganization$ =  this.store.select(selectCurrentCustomerOrganization);

  constructor(public router: Router, private readonly store: Store) {
  }
}
