import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { RegistrationCompanyAddressComponent } from './registration-company-address.component';

describe('RegistrationCompanyAddressComponent', () => {
  let component: RegistrationCompanyAddressComponent;
  let fixture: ComponentFixture<RegistrationCompanyAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideMockStore(),
      ],
      declarations: [
        RegistrationCompanyAddressComponent,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationCompanyAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
