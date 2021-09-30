import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersListPaginationComponent } from './members-list-pagination.component';

describe('MembersListPaginationComponent', () => {
  let component: MembersListPaginationComponent;
  let fixture: ComponentFixture<MembersListPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MembersListPaginationComponent,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersListPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
