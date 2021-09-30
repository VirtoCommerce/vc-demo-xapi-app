import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { initialState, membersFeatureKey } from '../../store/members.reducer';

import { InviteMembersComponent } from './invite-members.component';

describe('InviteMembersComponent', () => {
  let component: InviteMembersComponent;
  let fixture: ComponentFixture<InviteMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        InviteMembersComponent,
      ],
      providers: [
        provideMockStore({
          initialState: {
            [membersFeatureKey]: initialState,
          },
        }),
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
