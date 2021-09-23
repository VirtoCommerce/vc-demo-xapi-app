import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberStateComponent } from './member-state.component';

describe('MemberStateComponent', () => {
  let component: MemberStateComponent;
  let fixture: ComponentFixture<MemberStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MemberStateComponent,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
