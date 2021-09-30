import { AfterViewInit, Component, OnDestroy, Output, EventEmitter, ViewChild } from '@angular/core';
import {
  DynamicFormControlEvent,
  DynamicFormService,
} from '@ng-dynamic-forms/core';
import { PERSONAL_INFORMATION_LAYOUT } from './personal-information.layout';
import { PERSONAL_INFORMATION_INPUTS, PERSONAL_INFORMATION_MODEL } from './personal-information.model';
import { CompanyMember } from 'src/app/models/registration.model';
import { setCompanyRegistration } from '../../store/registration.actions';
import { Store } from '@ngrx/store';
import { fromFormModel, patchFormModel } from 'src/app/helpers/dynamic-forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { selectCompanyRegistration } from '../../store/registration.selectors';
import { DynamicNGBootstrapFormComponent } from '@ng-dynamic-forms/ui-ng-bootstrap';

@Component({
  selector: 'vc-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: [
    './personal-information.component.scss',
  ],
})
export class PersonalInformationComponent implements AfterViewInit, OnDestroy {
  @Output() formChange = new EventEmitter<boolean>()

  @ViewChild(DynamicNGBootstrapFormComponent, {
    static: true,
  })
  formComponent!: DynamicNGBootstrapFormComponent;

  formInputs = PERSONAL_INFORMATION_INPUTS;

  formModel = PERSONAL_INFORMATION_MODEL;

  formLayout = PERSONAL_INFORMATION_LAYOUT;

  formGroup = this.formService.createFormGroup(this.formModel, { updateOn: 'blur' });

  unsubscriber = new Subject();

  constructor(
    private readonly formService: DynamicFormService,
    private readonly store: Store
  ) {
  }

  ngAfterViewInit(): void {
    this.store.select(selectCompanyRegistration)
      .pipe(takeUntil(this.unsubscriber))
      .subscribe(companyRegistration => {
        patchFormModel(this.formInputs, companyRegistration?.owner);
        this.formService.detectChanges(this.formComponent);
      });
  }

  onChange(event: DynamicFormControlEvent): void {
    const owner = fromFormModel<CompanyMember>(event.model);
    if (owner != null) {
      this.store.dispatch(setCompanyRegistration({
        data: {
          owner,
        },
      }));
    }
    const formIsValid = event.group.valid;
    this.formChange.emit(formIsValid);
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
