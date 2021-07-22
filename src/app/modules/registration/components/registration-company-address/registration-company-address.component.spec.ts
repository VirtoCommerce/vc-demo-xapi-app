import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { RegistrationCompanyAddressComponent } from './registration-company-address.component';
import * as CompanyRegistration from 'src/app/modules/registration/store/company.reducer';
import * as Countries from 'src/app/store/countries/countries.reducer';

describe('RegistrationCompanyAddressComponent', () => {
  let component: RegistrationCompanyAddressComponent;
  let fixture: ComponentFixture<RegistrationCompanyAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideMockStore({
          initialState: {
            countries: Countries.initialState,
            companyRegistration: CompanyRegistration.initialState,
          },
        }),
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
