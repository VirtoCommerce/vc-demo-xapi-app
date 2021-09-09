import { DynamicNgxCodemirorModel } from './dynamic-ngx-codemiror.model';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { DynamicNgxCodemirorComponent } from './dynamic-ngx-codemiror.component';
import { DynamicFormService } from '@ng-dynamic-forms/core';
import { FormGroup } from '@angular/forms';

describe('DynamicNgxCodemirorComponent', () => {
  const testModel = new DynamicNgxCodemirorModel({ id: 'html' });
  const formModel = [
    testModel,
  ];
  let formGroup: FormGroup;
  let component: DynamicNgxCodemirorComponent;
  let fixture: ComponentFixture<DynamicNgxCodemirorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DynamicNgxCodemirorComponent,
      ],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(DynamicNgxCodemirorComponent);

        component = fixture.componentInstance;
      });
  });

  beforeEach(inject([
    DynamicFormService,
  ], (service: DynamicFormService) => {
    formGroup = service.createFormGroup(formModel);

    component.group = formGroup;
    component.model = testModel;

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
