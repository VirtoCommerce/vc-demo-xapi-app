import { provideMockStore } from '@ngrx/store/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { companiesFeatureKey, initialState } from '../../store/companies.reducer';
import { RouterTestingModule } from '@angular/router/testing';

import { CompanyEditComponent } from './company-edit.component';

describe('CompanyEditComponent', () => {
  let component: CompanyEditComponent;
  let fixture: ComponentFixture<CompanyEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CompanyEditComponent,
      ],
      imports: [
        RouterTestingModule,
      ],
      providers: [
        provideMockStore({
          initialState: {
            [companiesFeatureKey]: initialState,
          },
        }),
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

