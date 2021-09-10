import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { MembersEffects } from './members.effects';

describe('MemberEffects', () => {
  let actions$: Observable<any>;
  let effects: MembersEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MembersEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(MembersEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
