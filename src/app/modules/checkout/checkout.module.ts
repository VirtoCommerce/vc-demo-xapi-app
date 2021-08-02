import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout.component';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { CartCommentComponent } from './components/cart-comment/cart-comment.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { LineItemsComponent } from './components/line-items/line-items.component';

@NgModule({
  declarations: [
    CheckoutComponent,
    CartCommentComponent,
    CartSummaryComponent,
    LineItemsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CheckoutRoutingModule,
  ],
})
export class CheckoutModule { }
