import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormControlEvent, DynamicFormOption, DynamicFormService } from '@ng-dynamic-forms/core';
import { DynamicNGBootstrapFormComponent } from '@ng-dynamic-forms/ui-ng-bootstrap';
import { Store } from '@ngrx/store';
import { of, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { fromFormModel, patchFormModel } from 'src/app/helpers/dynamic-forms';
import { nonNull } from 'src/app/helpers/nonNull';
import { Company } from 'src/app/models/company.model';
import { PartialDeep } from 'type-fest';
import { selectDictionaryOptions } from '../../store/companies.selectors';
import { DICTIONARY_INPUTS, DICTIONARY_MODEL } from './dictionary.model';

@Component({
  selector: 'vc-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: [
    './dictionary.component.scss',
  ],
})
export class DictionaryComponent implements OnChanges, OnDestroy, OnInit {
  constructor(private readonly formService: DynamicFormService, private readonly store: Store) {}

  @Input()
  formComponent!: DynamicNGBootstrapFormComponent;

  @Input()
  company!: PartialDeep<Company>;

  @Output()
  propertyChange = new EventEmitter<PartialDeep<Company>>();

  formInputs = DICTIONARY_INPUTS;

  formModel = DICTIONARY_MODEL;

  formGroup!: FormGroup;

  unsubscriber = new Subject();

  onChange(event: DynamicFormControlEvent): void {
    const company = fromFormModel<Company>(event.model);
    if (company != null) {
      this.propertyChange.emit(company);
    }
  }

  ngOnInit(): void {
    this.formGroup = this.formService.createFormGroup(this.formModel, { updateOn: 'change' });
  }

  ngOnChanges(): void {
    this.store
      .select(selectDictionaryOptions)
      .pipe(
        takeUntil(this.unsubscriber),
        filter(nonNull)
      )
      .subscribe(items => {
        this.formInputs.shortTextDictionary.options$ = of([
          new DynamicFormOption({
            label: undefined,
            value: undefined,
            disabled: true,
          }),
          ...items,
        ]);
        patchFormModel(this.formInputs, this.company);
        this.formService.detectChanges(this.formComponent);
      });
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
