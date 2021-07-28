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
import { CountriesEffects } from './store/countries/countries.effects';
import { NavigationButtonComponent } from './components/navigation-button/navigation-button.component';
import * as fromCart from './store/cart/cart.reducer';
import { CartEffects } from './store/cart/cart.effects';
import { NG_VALIDATORS } from '@angular/forms';
import { DYNAMIC_VALIDATORS, Validator, ValidatorFactory } from '@ng-dynamic-forms/core';
import { passwordMatchValidator } from 'src/app/shared/password-match-validator';

const appInitializerFactory =
  (appInitializer: AppInitializerService) => async (): Promise<void> => await appInitializer.initialize();

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    NavigationButtonComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    GraphQLModule,
    NgbDropdownModule,
    NgbNavModule,
    NgbPaginationModule,
    NgxMaskModule.forRoot(),
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    EffectsModule.forRoot([]),
    StoreModule.forFeature(fromCountries.countriesFeatureKey, fromCountries.reducer),
    StoreModule.forFeature(fromCart.cartFeatureKey, fromCart.reducer),
    EffectsModule.forFeature([
      CountriesEffects,
      CartEffects,
    ]),
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
    {
      provide: NG_VALIDATORS,
      useValue: passwordMatchValidator,
      multi: true,
    },
    {
      provide: DYNAMIC_VALIDATORS,
      useValue: new Map<string, Validator | ValidatorFactory>([
        [
          'passwordMatchValidator',
          passwordMatchValidator,
        ],
      ]),
    },
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
