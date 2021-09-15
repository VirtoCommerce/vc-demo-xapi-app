import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { EmailRequestComponent } from './email-request.component';

describe('EmailRequestComponent', () => {
  let component: EmailRequestComponent;
  let fixture: ComponentFixture<EmailRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        EmailRequestComponent,
      ],
      imports: [
        RouterTestingModule,
        FormsModule,
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
