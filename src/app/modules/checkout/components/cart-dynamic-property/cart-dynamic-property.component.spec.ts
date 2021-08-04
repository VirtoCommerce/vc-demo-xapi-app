import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { CartDynamicPropertyComponent } from './cart-dynamic-property.component';
import * as Cart from 'src/app/store/cart/cart.reducer';

describe('CartDynamicPropertyComponent', () => {
  let component: CartDynamicPropertyComponent;
  let fixture: ComponentFixture<CartDynamicPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CartDynamicPropertyComponent,
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
    fixture = TestBed.createComponent(CartDynamicPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
