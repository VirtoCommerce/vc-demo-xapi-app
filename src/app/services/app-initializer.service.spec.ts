import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import * as CompanyRegistration from '../modules/registration/store/company.reducer';
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
            countries: Countries.initialState,
            companyRegistration: CompanyRegistration.initialState,
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
