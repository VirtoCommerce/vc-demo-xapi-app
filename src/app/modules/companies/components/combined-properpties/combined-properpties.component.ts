import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { DynamicFormService } from '@ng-dynamic-forms/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { nonNull } from 'src/app/helpers/nonNull';
import { selectSectorOptions } from 'src/app/modules/registration/components/company-details/countries.selector';
import { selectCurrentCustomerOrganization } from 'src/app/store/current-customer/current-customer.selectors';
import { getSectors } from 'src/app/store/sectors/sectors.actions';
import { COMBINED_PROPERTIES_INPUTS, COMBINED_PROPERTIES_MODEL } from './combined-properpties.model';

@Component({
  selector: 'vc-combined-properpties',
  templateUrl: './combined-properpties.component.html',
  styleUrls: [
    './combined-properpties.component.scss',
  ],
})
export class CombinedProperptiesComponent implements AfterViewInit, OnDestroy {
  constructor(private readonly formService: DynamicFormService, private readonly store: Store) {}

  formInputs = COMBINED_PROPERTIES_INPUTS;

  formModel = COMBINED_PROPERTIES_MODEL;

  formGroup = this.formService.createFormGroup(this.formModel, { updateOn: 'blur' });

  unsubscriber = new Subject();

  ngAfterViewInit(): void {
    this.formInputs.sector.options$ = this.store.select(selectSectorOptions)
      .pipe(
        filter(nonNull)
      );
    this.store.dispatch(getSectors());
    this.store.select(selectCurrentCustomerOrganization)
      .pipe(filter(nonNull))
      .subscribe(organization => {
        console.log(organization);
      });
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
