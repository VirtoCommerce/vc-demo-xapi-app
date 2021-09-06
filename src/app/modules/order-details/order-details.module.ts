import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DynamicFormsNGBootstrapUIModule } from '@ng-dynamic-forms/ui-ng-bootstrap';
import { OrderDetailsRoutingModule } from './order-details-routing.module';
import { DirectivesModule } from '../directives/directives.module';
import { OrderModule } from '../order/order.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFormsNGBootstrapUIModule,
    OrderDetailsRoutingModule,
    FontAwesomeModule,
    DirectivesModule,
    OrderModule,
  ],
})
export class OrderDetailsModule { }
