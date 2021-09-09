import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailRequestComponent } from './email-request.component';

describe('EmailRequestComponent', () => {
  let component: EmailRequestComponent;
  let fixture: ComponentFixture<EmailRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        EmailRequestComponent,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
