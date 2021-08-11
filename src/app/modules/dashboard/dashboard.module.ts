import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardItemComponent } from 'src/app/components/dashboard-item/dashboard-item.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {
  DashboardCaptionContainerComponent,
} from './dashboard-caption-container/dashboard-caption-container.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardItemComponent,
    DashboardCaptionContainerComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ],
})
export class DashboardModule {}
