import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicNGBootstrapDatetimePickerComponent } from './dynamic-ng-bootstrap-datetime-picker.component';

describe('DynamicNgBootstrapDatetimePickerComponent', () => {
  let component: DynamicNGBootstrapDatetimePickerComponent;
  let fixture: ComponentFixture<DynamicNGBootstrapDatetimePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DynamicNGBootstrapDatetimePickerComponent,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicNGBootstrapDatetimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
