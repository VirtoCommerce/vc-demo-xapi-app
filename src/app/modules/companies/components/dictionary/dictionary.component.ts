import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { DynamicFormService } from '@ng-dynamic-forms/core';
import { DynamicNGBootstrapFormComponent } from '@ng-dynamic-forms/ui-ng-bootstrap';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { patchFormModel } from 'src/app/helpers/dynamic-forms';
import { Company } from 'src/app/models/company.model';
import { PartialDeep } from 'type-fest';
import { selectEditedCompany } from '../../store/companies.selectors';
import { DICTIONARY_INPUTS, DICTIONARY_MODEL } from './dictionary.model';

@Component({
  selector: 'vc-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: [
    './dictionary.component.scss',
  ],
})
export class DictionaryComponent implements AfterViewInit, OnDestroy {
  constructor(private readonly formService: DynamicFormService, private readonly store: Store) {}

  @Input()
  formComponent!: DynamicNGBootstrapFormComponent;

  @Input()
  company!: PartialDeep<Company>;

  formInputs = DICTIONARY_INPUTS;

  formModel = DICTIONARY_MODEL;

  formGroup = this.formService.createFormGroup(this.formModel, { updateOn: 'blur' });

  unsubscriber = new Subject();

  ngAfterViewInit(): void {
    console.log(this.company);
    this.store
      .select(selectEditedCompany)
      .pipe(takeUntil(this.unsubscriber))
      .subscribe(companyRegistration => {
        patchFormModel(this.formInputs, companyRegistration);
        this.formService.detectChanges(this.formComponent);
      });

    /*
     * This.formInputs.dictionary.options$ = this.store.select(selectEditedCompany)
     *   .pipe(filter(nonNull), concatMap(options => {
     *     return of([
     *       new DynamicFormOption({
     *         label: undefined,
     *         value: undefined,
     *         disabled: true,
     *       }),
     *       ...options,
     *     ]);
     *   }));
     */
    this.formInputs.dictionary.options$.pipe(takeUntil(this.unsubscriber)).subscribe(() => {
      this.formInputs.dictionary.value = undefined;
    });
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
