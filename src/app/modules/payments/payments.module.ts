import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

import { PaymentsComponent } from './payments.component';
import { PaymentDetailsComponent } from './payment-details.component';
import { PaymentsRoutingModule } from './payments-routing.module';
import { VcCommonModule } from '../vc-common/vc-common.module';

@NgModule({
  declarations: [
    PaymentsComponent,
    PaymentDetailsComponent,
  ],
  imports: [
    CommonModule,
    VcCommonModule,
    PaymentsRoutingModule,
    NgbPaginationModule,
    FormsModule,
    FontAwesomeModule,
  ],
})
export class PaymentsModule { }
