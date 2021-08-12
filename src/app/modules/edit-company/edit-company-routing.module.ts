import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCompanyComponent } from './edit-company.component';

const routes: Routes = [
  {
    path: '',
    component: EditCompanyComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class EditCompanyRoutingModule { }
