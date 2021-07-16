import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowcaseRoutingModule } from './showcase-routing.module';
import { ShowcaseComponent } from './showcase.component';

@NgModule({
  declarations: [
    ShowcaseComponent,
  ],
  imports: [
    CommonModule,
    ShowcaseRoutingModule,
  ],
})
export class ShowcaseModule { }
