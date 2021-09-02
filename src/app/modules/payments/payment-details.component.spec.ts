import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { currentCustomerFeatureKey, initialState as currentCustomerInitialState }
  from 'src/app/store/current-customer/current-customer.reducer';

import { PaymentDetailsComponent } from './payment-details.component';

describe('PaymentDetailsComponent', () => {
  let component: PaymentDetailsComponent;
  let fixture: ComponentFixture<PaymentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PaymentDetailsComponent,
      ],
      imports: [
        RouterTestingModule,
      ],
      providers: [
        provideMockStore({
          initialState: {
            payments: null,
            [currentCustomerFeatureKey]: currentCustomerInitialState,
          },
        }),
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
