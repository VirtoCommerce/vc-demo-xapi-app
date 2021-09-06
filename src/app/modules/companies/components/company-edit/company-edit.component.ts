import { selectCurrentCustomerOrganization } from './../../../../store/current-customer/current-customer.selectors';
import { Company } from '../../../../models/company.model';
import { selectEditedCompany, selectSelectedCompany } from './../../store/companies.selectors';
import { getCompany, setCompany, updateCompany } from './../../store/companies.actions';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { PartialDeep } from 'type-fest';
import { nonNull } from 'src/app/helpers/nonNull';

@Component({
  selector: 'vc-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: [
    './company-edit.component.scss',
  ],
})

export class CompanyEditComponent implements OnInit, OnDestroy {
  selectedCompany$ = this.store.select(selectSelectedCompany);

  editedCompany$ = this.store.select(selectEditedCompany);

  isValidForm = {
    properties: false,
    usualProperties: false,
  };

  get isValidForms(): boolean {
    return !Object.values(this.isValidForm).every(x => x === true);
  }

  unsubscriber = new Subject();

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly store: Store,
    private readonly route: ActivatedRoute
  ) {  }

  ngOnInit(): void {
    this.route.paramMap.pipe(takeUntil(this.unsubscriber)).subscribe(params => {
      const id = params.get('id');
      if (id === 'current') {
        this.store.select(selectCurrentCustomerOrganization)
          .pipe(filter(nonNull))
          .subscribe(organization => {
            this.store.dispatch(getCompany({ id: organization.id }));
          });
      }
      else {
        this.store.dispatch(getCompany({ id: id as string }));
      }
    });
  }

  onChange(company: PartialDeep<Company> | null): void {
    if (company != null) {
      this.store.dispatch(setCompany({
        data: company,
      }));
    }
  }

  onValidChange(): void {
    this.changeDetectorRef.detectChanges();
  }

  submit(): void {
    this.store.dispatch(updateCompany());
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}

