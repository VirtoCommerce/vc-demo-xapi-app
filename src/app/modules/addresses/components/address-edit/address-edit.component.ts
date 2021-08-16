import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { DynamicFormService } from '@ng-dynamic-forms/core';
import { DynamicNGBootstrapFormComponent } from '@ng-dynamic-forms/ui-ng-bootstrap';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { patchFormModel } from 'src/app/helpers/dynamic-forms';
import { nonNull } from 'src/app/helpers/nonNull';
import { selectSelectedCompany } from 'src/app/modules/companies/store/companies.selectors';
import { selectSelectedAddress } from '../../store/addresses.selectors';
import { ADDRESS_EDIT_FORM_LAYOUT } from './address-edit-form.layout';
import { ADDRESS_EDIT_FORM_INPUTS, ADDRESS_EDIT_FORM_MODEL } from './address-edit-form.model';

@Component({
  selector: 'vc-address-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: [
    './address-edit.component.scss',
  ],
})
export class AddressEditComponent implements AfterViewInit, OnDestroy {
  @ViewChild(DynamicNGBootstrapFormComponent, {
    static: true,
  })
  formComponent!: DynamicNGBootstrapFormComponent;

  formInputs = ADDRESS_EDIT_FORM_INPUTS;

  formModel = ADDRESS_EDIT_FORM_MODEL;

  formLayout = ADDRESS_EDIT_FORM_LAYOUT;

  formGroup = this.formService.createFormGroup(this.formModel, { updateOn: 'blur' });

  unsubscriber = new Subject();

  selectedCompany$ = this.store.select(selectSelectedCompany);

  constructor(
    private readonly formService: DynamicFormService,
    private readonly store: Store
  ) { }

  ngAfterViewInit(): void {
    this.store.select(selectSelectedAddress).pipe(filter(nonNull), takeUntil(this.unsubscriber))
      .subscribe(state => {
        console.log(state);
        patchFormModel(this.formInputs, state);
        this.formService.detectChanges(this.formComponent);
      });
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
