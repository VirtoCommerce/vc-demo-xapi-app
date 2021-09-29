import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationByInvitationComponent } from './registration-by-invitation.component';

describe('RegistrationByInvitationComponent', () => {
  let component: RegistrationByInvitationComponent;
  let fixture: ComponentFixture<RegistrationByInvitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        RegistrationByInvitationComponent,
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
