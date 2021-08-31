import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { OrdersComponent } from './orders.component';
import { ordersFeatureKey, initialState } from 'src/app/store/order/orders.reducer';
import { currentCustomerFeatureKey, initialState as currentCustomerInitialState }
  from 'src/app/store/current-customer/current-customer.reducer';

describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        OrdersComponent,
      ],
      providers: [
        provideMockStore({
          initialState: {
            [ordersFeatureKey]: initialState,
            [currentCustomerFeatureKey]: currentCustomerInitialState,
          },
        }),
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
