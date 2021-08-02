import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SectorsEffects } from './sectors.effects';

describe('SectorsEffects', () => {
  let actions$: Observable<any>;
  let effects: SectorsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SectorsEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(SectorsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
