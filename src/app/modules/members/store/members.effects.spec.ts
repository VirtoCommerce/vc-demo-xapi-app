import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';

import { MembersEffects } from './members.effects';
import { initialState, membersFeatureKey } from './members.reducer';

describe('MemberEffects', () => {
  let actions$: Observable<any>;
  let effects: MembersEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      providers: [
        MembersEffects,
        provideMockStore({
          initialState: {
            [membersFeatureKey]: initialState,
          },
        }),
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(MembersEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
