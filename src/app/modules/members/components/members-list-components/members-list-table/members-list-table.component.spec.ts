import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersListTableComponent } from './members-list-table.component';

describe('MembersListTableComponent', () => {
  let component: MembersListTableComponent;
  let fixture: ComponentFixture<MembersListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MembersListTableComponent,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
