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
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    StoreModule.forFeature(fromCountries.countriesFeatureKey, fromCountries.reducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([
      CountriesEffects,
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
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
