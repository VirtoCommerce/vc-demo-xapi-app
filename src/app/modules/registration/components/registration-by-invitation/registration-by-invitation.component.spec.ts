import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { ValidationModule } from 'src/app/modules/validation/validation.module';
import { initialState, registrationFeatureKey } from '../../store/registration.reducer';

import { RegistrationByInvitationComponent } from './registration-by-invitation.component';

describe('RegistrationByInvitationComponent', () => {
  let component: RegistrationByInvitationComponent;
  let fixture: ComponentFixture<RegistrationByInvitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        RegistrationByInvitationComponent,
      ],
      imports: [
        RouterTestingModule,
        ValidationModule,
      ],
      providers: [
        provideMockStore({
          initialState: {
            [registrationFeatureKey]: initialState,
          },
        }),
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationByInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
