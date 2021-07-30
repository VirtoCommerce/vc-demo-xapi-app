import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout.component';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { CartCommentComponent } from './components/cart-comment/cart-comment.component';
import { LineItemsComponent } from './components/line-items/line-items.component';

@NgModule({
  declarations: [
    CheckoutComponent,
    CartCommentComponent,
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
