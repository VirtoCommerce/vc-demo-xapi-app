import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { EnvironmentVariablesModule } from './modules/environment-variables/environment-variables.module';
import { HttpClientModule } from '@angular/common/http';
import { AppInitializerService } from './services/app-initializer.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const appInitializerFactory = (appInitializer: AppInitializerService) => () => appInitializer.initialize();

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25,
      logOnly: environment.production }),
    EffectsModule.forRoot([]),
    EnvironmentVariablesModule,
    NgbModule,
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
