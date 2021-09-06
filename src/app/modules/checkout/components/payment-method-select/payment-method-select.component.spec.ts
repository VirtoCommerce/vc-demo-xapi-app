import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { PaymentMethodSelectComponent } from './payment-method-select.component';

describe('PaymentMethodSelectComponent', () => {
  let component: PaymentMethodSelectComponent;
  let fixture: ComponentFixture<PaymentMethodSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PaymentMethodSelectComponent,
      ],
      providers: [
        NgbActiveModal,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentMethodSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
