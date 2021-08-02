import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDynamicPropertyComponent } from './cart-dynamic-property.component';

describe('CartDynamicPropertyComponent', () => {
  let component: CartDynamicPropertyComponent;
  let fixture: ComponentFixture<CartDynamicPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CartDynamicPropertyComponent,
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
