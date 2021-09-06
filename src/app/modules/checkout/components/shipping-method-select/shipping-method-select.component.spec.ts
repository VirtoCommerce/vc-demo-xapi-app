import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ShippingMethodSelectComponent } from './shipping-method-select.component';

describe('ShippingMethodSelectComponent', () => {
  let component: ShippingMethodSelectComponent;
  let fixture: ComponentFixture<ShippingMethodSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ShippingMethodSelectComponent,
      ],
      providers: [
        NgbActiveModal,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingMethodSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
