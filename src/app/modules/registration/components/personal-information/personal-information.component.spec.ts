import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { PersonalInformationComponent } from './personal-information.component';
import * as Registration from 'src/app/modules/registration/store/registration.reducer';
import * as Countries from 'src/app/store/countries/countries.reducer';
import { ValidationModule } from 'src/app/modules/validation/validation.module';

describe('PersonalInformationComponent', () => {
  let component: PersonalInformationComponent;
  let fixture: ComponentFixture<PersonalInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ValidationModule,
      ],
      providers: [
        provideMockStore({
          initialState: {
            [Countries.countriesFeatureKey]: Countries.initialState,
            [Registration.registrationFeatureKey]: Registration.initialState,
          },
        }),
      ],
      declarations: [
        PersonalInformationComponent,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
