import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { currentCustomerFeatureKey, initialState as currentCustomerInitialState }
  from 'src/app/store/current-customer/current-customer.reducer';
import { addressesFeatureKey, initialState as AddressesInitialState } from '../../store/addresses.reducer';

import { AddressEditComponent } from './address-edit.component';

describe('AddressEditComponent', () => {
  let component: AddressEditComponent;
  let fixture: ComponentFixture<AddressEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideMockStore({
          initialState: {
            [addressesFeatureKey]: AddressesInitialState,
            [currentCustomerFeatureKey]: currentCustomerInitialState,
          },
        }),
      ],
      declarations: [
        AddressEditComponent,
      ],
      imports: [
        RouterTestingModule,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
