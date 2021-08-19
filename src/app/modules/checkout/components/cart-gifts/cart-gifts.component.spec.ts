import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import * as Cart from 'src/app/store/cart/cart.reducer';
import { CartGiftsComponent } from './cart-gifts.component';

describe('CartGiftsComponent', () => {
  let component: CartGiftsComponent;
  let fixture: ComponentFixture<CartGiftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CartGiftsComponent,
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
    fixture = TestBed.createComponent(CartGiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
