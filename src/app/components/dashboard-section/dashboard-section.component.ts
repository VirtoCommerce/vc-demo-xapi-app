import { Component, Input } from '@angular/core';
import { DashboardSectionType } from '../dashboard/dashboard-content';

@Component({
  selector: 'vc-dashboard-section',
  templateUrl: './dashboard-section.component.html',
  styleUrls: [
    './dashboard-section.component.scss',
  ],
})
export class DashboardSectionComponent {
  @Input() currentSection!: DashboardSectionType;
}
