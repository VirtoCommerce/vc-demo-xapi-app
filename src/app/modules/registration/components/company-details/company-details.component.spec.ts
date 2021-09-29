import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { CompanyDetailsComponent } from './company-details.component';
import * as CompanyRegistration from 'src/app/modules/registration/store/registration.reducer';
import * as Countries from 'src/app/store/countries/countries.reducer';

describe('CompanyDetailsComponent', () => {
  let component: CompanyDetailsComponent;
  let fixture: ComponentFixture<CompanyDetailsComponent>;

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
        CompanyDetailsComponent,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
