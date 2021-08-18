import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultivaluePropertiesComponent } from './multivalue-properties.component';

describe('MultivaluePropertiesComponent', () => {
  let component: MultivaluePropertiesComponent;
  let fixture: ComponentFixture<MultivaluePropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MultivaluePropertiesComponent,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultivaluePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
