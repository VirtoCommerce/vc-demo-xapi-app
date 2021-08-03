import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { CartCouponComponent } from './cart-coupon.component';
import { FormsModule } from '@angular/forms';
import * as Cart from 'src/app/store/cart/cart.reducer';

describe('CartCouponComponent', () => {
  let component: CartCouponComponent;
  let fixture: ComponentFixture<CartCouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CartCouponComponent,
      ],
      imports: [
        FormsModule,
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
    fixture = TestBed.createComponent(CartCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
