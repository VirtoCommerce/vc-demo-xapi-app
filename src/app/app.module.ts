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

const appInitializerFactory =
  (appInitializer: AppInitializerService) => async (): Promise<void> => await appInitializer.initialize();

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    EffectsModule.forRoot([]),
    GraphQLModule,
    NgbDropdownModule,
    NgbNavModule,
    NgbPaginationModule,
    NgxMaskModule.forRoot(),
    StoreModule.forFeature(fromCountries.countriesFeatureKey, fromCountries.reducer),
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
