import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationCompanyAddressComponent } from './registration-company-address.component';

describe('RegistrationCompanyAddressComponent', () => {
  let component: RegistrationCompanyAddressComponent;
  let fixture: ComponentFixture<RegistrationCompanyAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
