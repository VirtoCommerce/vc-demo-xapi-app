import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DynamicFormsNGBootstrapUIModule } from '@ng-dynamic-forms/ui-ng-bootstrap';
import { OrderSubmittedRoutingModule } from './order-submitted-routing.module';
import { DirectivesModule } from '../directives/directives.module';
import { OrderModule } from '../order/order.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFormsNGBootstrapUIModule,
    OrderSubmittedRoutingModule,
    FontAwesomeModule,
    DirectivesModule,
    OrderModule,
  ],
})
export class OrderSubmittedModule { }
