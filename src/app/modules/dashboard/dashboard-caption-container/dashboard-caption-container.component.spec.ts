import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCaptionContainerComponent } from './dashboard-caption-container.component';

describe('DashboardCaptionContainerComponent', () => {
  let component: DashboardCaptionContainerComponent;
  let fixture: ComponentFixture<DashboardCaptionContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DashboardCaptionContainerComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCaptionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
