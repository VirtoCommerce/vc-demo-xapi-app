import { AppInitializerService } from './services/app-initializer.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CompanyNameComponent } from './components/company-name/company-name.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardItemComponent } from './components/dashboard-item/dashboard-item.component';
import { DashboardSectionComponent } from './components/dashboard-section/dashboard-section.component';

import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgbDropdownModule, NgbNavModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { GraphQLModule } from './graphql.module';
import { NgxMaskModule } from 'ngx-mask';
import { ValidationModule } from './modules/validation/validation.module';
import { CustomDynamicFormsModule } from './modules/custom-dynamic-forms/custom-dynamic-forms.module';

import { metaReducers, reducers } from './store';
import { CountriesEffects } from './store/countries/countries.effects';
import { CurrentCustomerEffects } from './store/current-customer/current-customer.effects';
import { CartEffects } from './store/cart/cart.effects';
import { SectorsEffects } from './store/sectors/sectors.effects';
import { LoginEffects } from './store/login/login.effects';
import { RegionsEffects } from './store/regions/regions.effects';

import * as fromSectors from './store/sectors/sectors.reducer';
import * as fromCart from './store/cart/cart.reducer';
import * as fromCountries from './store/countries/countries.reducer';
import * as fromLogin from './store/login/login.reducer';
import * as fromCurrentCustomer from './store/current-customer/current-customer.reducer';
import * as fromRegions from './store/regions/regions.reducer';

const appInitializerFactory =
  (appInitializer: AppInitializerService) => async (): Promise<void> => await appInitializer.initialize();

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    CompanyNameComponent,
    DashboardComponent,
    DashboardItemComponent,
    DashboardSectionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    GraphQLModule,
    NgbDropdownModule,
    NgbNavModule,
    NgbPaginationModule,
    FontAwesomeModule,
    ValidationModule,
    NgxMaskModule.forRoot(),
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    EffectsModule.forRoot([]),
    StoreModule.forFeature(fromSectors.sectorsFeatureKey, fromSectors.reducer),
    EffectsModule.forFeature([
      CountriesEffects,
      RegionsEffects,
      CartEffects,
      SectorsEffects,
      LoginEffects,
      CurrentCustomerEffects,
    ]),
    StoreModule.forFeature(fromCountries.countriesFeatureKey, fromCountries.reducer),
    StoreModule.forFeature(fromRegions.regionsFeatureKey, fromRegions.reducer),
    StoreModule.forFeature(fromCart.cartFeatureKey, fromCart.reducer),
    StoreModule.forFeature(fromLogin.loginFeatureKey, fromLogin.reducer),
    StoreModule.forFeature(fromCurrentCustomer.currentCustomerFeatureKey, fromCurrentCustomer.reducer),
    CustomDynamicFormsModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [
        AppInitializerService,
      ],
      multi: true,
    },
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
