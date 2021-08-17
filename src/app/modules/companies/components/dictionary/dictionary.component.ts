import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { DynamicFormOption, DynamicFormService } from '@ng-dynamic-forms/core';
import { Store } from '@ngrx/store';
import { of, Subject } from 'rxjs';
import { concatMap, filter, takeUntil } from 'rxjs/operators';
import { nonNull } from 'src/app/helpers/nonNull';
import { Company } from 'src/app/models/company.model';
import { selectSectorOptions } from 'src/app/modules/registration/components/company-details/countries.selector';
import { getSectors } from 'src/app/store/sectors/sectors.actions';
import { PartialDeep } from 'type-fest';
import { DICTIONARY_INPUTS, DICTIONARY_MODEL } from './dictionary.model';

@Component({
  selector: 'vc-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: [
    './dictionary.component.scss',
  ],
})
export class DictionaryProperptiesComponent implements AfterViewInit, OnDestroy {
  constructor(private readonly formService: DynamicFormService, private readonly store: Store) {}

  @Input()
  company!: PartialDeep<Company>

  formInputs = DICTIONARY_INPUTS;

  formModel = DICTIONARY_MODEL;

  formGroup = this.formService.createFormGroup(this.formModel, { updateOn: 'blur' });

  unsubscriber = new Subject();

  ngAfterViewInit(): void {
    this.formInputs.sector.options$ = this.store.select(selectSectorOptions)
      .pipe(
        filter(nonNull),
        concatMap(options => {
          return of([
            new DynamicFormOption({
              label: undefined,
              value: undefined,
              disabled: true,
            }),
            ...options,
          ]);
        })
      );
    this.formInputs.sector.options$
      .pipe(takeUntil(this.unsubscriber)).subscribe(() => {
        if (this.company.dictionary?.Sector) {
          this.formInputs.sector.value = this.company.dictionary?.Sector;
        }
        else {
          this.formInputs.sector.value = undefined;
        }
      });
    this.store.dispatch(getSectors());
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
