import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavigationButtonComponent } from './components/navigation-button/navigation-button.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationButtonComponent,
  },
  {
    path: 'dashboard',
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
