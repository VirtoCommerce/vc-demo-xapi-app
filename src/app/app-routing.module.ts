import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationButtonComponent } from './components/navigation-button/navigation-button.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationButtonComponent,
  },
  {
    path: 'styleguide',
    loadChildren: () => import('./modules/styleguide/styleguide.module').then(m => m.StyleguideModule),
  },
  {
    path: 'registration',
    loadChildren: () => import('./modules/registration/registration.module').then(m => m.RegistrationModule),
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
