import { CurrentCustomerEffects } from './store/current-customer/current-customer.effects';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbDropdownModule, NgbNavModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { AppInitializerService } from './services/app-initializer.service';
import { metaReducers, reducers } from './store';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgxMaskModule } from 'ngx-mask';
import { FooterComponent } from './components/footer/footer.component';
import * as fromCountries from './store/countries/countries.reducer';
import * as fromRegions from './store/regions/regions.reducer';
import * as fromSectors from './store/sectors/sectors.reducer';
import { CountriesEffects } from './store/countries/countries.effects';
import { NavigationButtonComponent } from './components/navigation-button/navigation-button.component';
import * as fromCart from './store/cart/cart.reducer';
import { CartEffects } from './store/cart/cart.effects';
import { SectorsEffects } from './store/sectors/sectors.effects';
import { ValidationModule } from './modules/validation/validation.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as fromLogin from './store/login/login.reducer';
import { LoginEffects } from './store/login/login.effects';
import * as fromCurrentCustomer from './store/current-customer/current-customer.reducer';
import { CompanyNameComponent } from './components/company-name/company-name.component';
import { RegionsEffects } from './store/regions/regions.effects';

const appInitializerFactory =
  (appInitializer: AppInitializerService) => async (): Promise<void> => await appInitializer.initialize();

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    NavigationButtonComponent,
    CompanyNameComponent,
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
    ValidationModule,
    FontAwesomeModule,
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
