import { Component } from '@angular/core';
import { selectCurrentCustomer } from './../../store/current-customer/current-customer.selectors';
import { Store } from '@ngrx/store';
import { dashboardContent } from './dashboard-content';

@Component({
  selector: 'vc-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [
    './dashboard.component.scss',
  ],
})
export class DashboardComponent {
  readonly dashboardContent = dashboardContent;

  currentCustomer$ =  this.store.select(selectCurrentCustomer);

  constructor(private readonly store: Store) {
  }
}
