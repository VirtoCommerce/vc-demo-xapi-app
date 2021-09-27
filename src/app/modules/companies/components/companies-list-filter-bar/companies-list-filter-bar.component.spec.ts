import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesListFilterBarComponent } from './companies-list-filter-bar.component';

describe('CompaniesListFilterBarComponent', () => {
  let component: CompaniesListFilterBarComponent;
  let fixture: ComponentFixture<CompaniesListFilterBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CompaniesListFilterBarComponent,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesListFilterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
