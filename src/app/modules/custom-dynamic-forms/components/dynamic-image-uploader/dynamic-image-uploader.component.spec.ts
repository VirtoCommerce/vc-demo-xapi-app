import { DynamicImageUploaderModel } from './dynamic-image-uploader.model';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';

import { DynamicImageUploaderComponent } from './dynamic-image-uploader.component';
import { DynamicFormService } from '@ng-dynamic-forms/core';

describe('DynamicImageUploaderComponent', () => {
  const testModel = new DynamicImageUploaderModel({ id: 'image' });
  const formModel = [
    testModel,
  ];
  let formGroup: FormGroup;
  let component: DynamicImageUploaderComponent;
  let fixture: ComponentFixture<DynamicImageUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DynamicImageUploaderComponent,
      ],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(DynamicImageUploaderComponent);

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
