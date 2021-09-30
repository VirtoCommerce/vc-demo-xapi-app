import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import * as Registration from '../modules/registration/store/registration.reducer';
import * as Countries from '../store/countries/countries.reducer';

import { AppInitializerService } from './app-initializer.service';

describe('AppInitializerService', () => {
  let service: AppInitializerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        provideMockStore({
          initialState: {
            [Countries.countriesFeatureKey]: Countries.initialState,
            [Registration.registrationFeatureKey]: Registration.initialState,
          },
        }),
      ],
    });
    service = TestBed.inject(AppInitializerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
