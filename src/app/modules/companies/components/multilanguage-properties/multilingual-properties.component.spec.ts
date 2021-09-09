import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { companiesFeatureKey, initialState } from '../../store/companies.reducer';

import { MultilingualPropertiesComponent } from './multilingual-properties.component';

describe('MultilanguagePropertiesComponent', () => {
  let component: MultilingualPropertiesComponent;
  let fixture: ComponentFixture<MultilingualPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MultilingualPropertiesComponent,
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
    fixture = TestBed.createComponent(MultilingualPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
