import { TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { AppInitializerService } from './app-initializer.service';

describe('AppInitializerService', () => {
  let service: AppInitializerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({ initialState: {} }),
      ],
    });
    service = TestBed.inject(AppInitializerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
