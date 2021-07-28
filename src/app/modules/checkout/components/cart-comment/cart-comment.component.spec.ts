import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCommentComponent } from './cart-comment.component';

describe('CartCommentComponent', () => {
  let component: CartCommentComponent;
  let fixture: ComponentFixture<CartCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CartCommentComponent,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
