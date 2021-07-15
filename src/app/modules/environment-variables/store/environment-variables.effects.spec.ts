import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { EnvironmentVariablesEffects } from './environment-variables.effects';

describe('EnvironmentVariablesEffects', () => {
  let actions$: Observable<any>;
  let effects: EnvironmentVariablesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        EnvironmentVariablesEffects,
        provideMockActions(() => actions$)
      ],
    });

    effects = TestBed.inject(EnvironmentVariablesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
