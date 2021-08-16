import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressesComponent } from './addresses.component';
import { AddressEditComponent } from './components/address-edit/address-edit.component';

const routes: Routes = [
  {
    path: '',
    component: AddressesComponent,
  },
  {
    path: ':id',
    component: AddressEditComponent,
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
export class AddressesRoutingModule { }
