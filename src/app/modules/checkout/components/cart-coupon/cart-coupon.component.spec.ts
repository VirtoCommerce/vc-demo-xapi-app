import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCouponComponent } from './cart-coupon.component';

describe('CartCouponComponent', () => {
  let component: CartCouponComponent;
  let fixture: ComponentFixture<CartCouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CartCouponComponent,
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
