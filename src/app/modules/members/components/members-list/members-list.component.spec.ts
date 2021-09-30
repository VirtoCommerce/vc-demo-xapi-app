import { ComponentFixture, TestBed } from '@angular/core/testing';
import { membersFeatureKey, initialState as membersInitialState } from '../../store/members.reducer';
import { currentCustomerFeatureKey, initialState as currentCustomerInitialState }
  from 'src/app/store/current-customer/current-customer.reducer';
import { provideMockStore } from '@ngrx/store/testing';
import { MembersListComponent } from './members-list.component';

describe('MembersListComponent', () => {
  let component: MembersListComponent;
  let fixture: ComponentFixture<MembersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MembersListComponent,
      ],
      providers: [
        provideMockStore({
          initialState: {
            [membersFeatureKey]: membersInitialState,
            [currentCustomerFeatureKey]: currentCustomerInitialState,
          },
        }),
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*
   * AfterEach(() => {
   *   TestBed.resetTestingModule();
   * });
   */
});
