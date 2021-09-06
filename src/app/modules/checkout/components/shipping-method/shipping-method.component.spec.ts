import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import * as Cart from 'src/app/store/cart/cart.reducer';
import { ShippingMethodComponent } from './shipping-method.component';

describe('ShippingMethodComponent', () => {
  let component: ShippingMethodComponent;
  let fixture: ComponentFixture<ShippingMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ShippingMethodComponent,
      ],
      providers: [
        provideMockStore({
          initialState: {
            cart: Cart.initialState,
          },
        }),
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
