import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'styleguide',
    loadChildren: () => import('./modules/styleguide/styleguide.module').then(m => m.StyleguideModule),
  },
  {
    path: 'registration',
    loadChildren: () => import('./modules/registration/registration.module').then(m => m.RegistrationModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'checkout',
    loadChildren: () => import('./modules/checkout/checkout.module').then(m => m.CheckoutModule),
  },
  {
    path: 'addresses',
    loadChildren: () => import('./modules/addresses/addresses.module').then(m => m.AddressesModule),
  },
  {
    path: 'companies',
    loadChildren: () => import('./modules/companies/companies.module').then(m => m.CompaniesModule),
  },
  {
    path: 'orders',
    loadChildren: () => import('./modules/orders/orders.module').then(m => m.OrdersModule),
  },
  {
    path: 'order',
    loadChildren: () => import('./modules/order-details/order-details.module').then(m => m.OrderDetailsModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
