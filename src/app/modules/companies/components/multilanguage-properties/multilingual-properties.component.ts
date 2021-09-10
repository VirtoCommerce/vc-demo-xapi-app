import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DynamicFormControlEvent, DynamicFormService } from '@ng-dynamic-forms/core';
import { DynamicNGBootstrapFormComponent } from '@ng-dynamic-forms/ui-ng-bootstrap';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { fromFormModel, patchFormModel } from 'src/app/helpers/dynamic-forms';
import { nonNull } from 'src/app/helpers/nonNull';
import { Company } from 'src/app/models/company.model';
import { selectCurrentCustomerOrganization } from 'src/app/store/current-customer/current-customer.selectors';
import { PartialDeep } from 'type-fest';
import { setActiveCulture } from '../../store/companies.actions';
import { selectCultureOptions, selectCurrentCulture } from '../../store/companies.selectors';
import { MULTILINGUAL_PROPERTIES_INPUTS, MULTILINGUAL_PROPERTIES_MODEL } from './multilingual-properties.model';

@Component({
  selector: 'vc-multilingual-properties',
  templateUrl: './multilingual-properties.component.html',
  styleUrls: [
    './multilingual-properties.component.scss',
  ],
})
export class MultilingualPropertiesComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  company!: PartialDeep<Company>

  @Output()
  propertyChange = new EventEmitter<PartialDeep<Company>>();

  @Output()
  validChange = new EventEmitter<boolean>();

  @ViewChild(DynamicNGBootstrapFormComponent, {
    static: true,
  })
  formComponent!: DynamicNGBootstrapFormComponent;

  cultureOptions$ = this.store.select(selectCultureOptions);

  activeCulture$ = this.store.select(selectCurrentCulture);

  formInputs = MULTILINGUAL_PROPERTIES_INPUTS;

  formModel = MULTILINGUAL_PROPERTIES_MODEL;

  formGroup!: FormGroup;

  organizationId: string | null = null;

  unsubscriber = new Subject();

  constructor(
    private readonly formService: DynamicFormService,
    private readonly store: Store,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formService.createFormGroup(this.formModel, { updateOn: 'blur' });
    this.validChange.emit(this.formGroup.valid);

    this.route.paramMap.pipe(takeUntil(this.unsubscriber)).subscribe(params => {
      this.organizationId = params.get('id');
    });
  }

  ngOnChanges(): void {
    patchFormModel(this.formInputs, this.company);
    this.validChange.emit(this.formGroup?.valid);
  }

  onChange(event: DynamicFormControlEvent): void {
    const company = fromFormModel<Company>(event.model);
    if (company != null) {
      this.propertyChange.emit(company);
    }
    this.validChange.emit(this.formGroup.valid);
  }

  onCultureChange(culture: string): void {
    if (this.organizationId === 'current') {
      this.store.select(selectCurrentCustomerOrganization)
        .pipe(filter(nonNull))
        .subscribe(organization => this.store.dispatch(setActiveCulture({
          id: organization.id,
          culture,
        })));
    }
    else {
      this.store.dispatch(setActiveCulture({
        id: this.organizationId as string,
        culture,
      }));
    }
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
