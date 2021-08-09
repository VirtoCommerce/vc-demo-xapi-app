import { CompanyEditComponent } from './components/company-edit/company-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './companies.component';

const routes: Routes = [
  { path: '', component: CompaniesComponent },
  { path: ':id', component: CompanyEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule { }
