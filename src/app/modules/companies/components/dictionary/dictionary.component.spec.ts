import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { initialState } from 'src/app/store/current-customer/current-customer.reducer';
import { companiesFeatureKey } from '../../store/companies.reducer';
import { DictionaryComponent } from './dictionary.component';

describe('DictionaryComponent', () => {
  let component: DictionaryComponent;
  let fixture: ComponentFixture<DictionaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DictionaryComponent,
      ],
      providers: [
        provideMockStore({
          initialState: {
            [companiesFeatureKey]: initialState,
          },
        }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
