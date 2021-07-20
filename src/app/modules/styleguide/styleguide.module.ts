import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StyleguideRoutingModule } from './styleguide-routing.module';
import { StyleguideComponent } from './styleguide.component';

@NgModule({
  declarations: [
    StyleguideComponent,
  ],
  imports: [
    CommonModule,
    StyleguideRoutingModule,
  ],
})
export class StyleguideModule { }
