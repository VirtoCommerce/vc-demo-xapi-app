import { Component } from '@angular/core';
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
}
