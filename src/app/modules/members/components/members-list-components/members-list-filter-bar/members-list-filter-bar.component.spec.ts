import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersListFilterBarComponent } from './members-list-filter-bar.component';

describe('MembersListFilterBarComponent', () => {
  let component: MembersListFilterBarComponent;
  let fixture: ComponentFixture<MembersListFilterBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MembersListFilterBarComponent,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersListFilterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
