import { selectCurrentCustomerOrganization } from './../../../../store/current-customer/current-customer.selectors';
import { Company } from '../../../../models/company.model';
import { selectSelectedCompany } from './../../store/companies.selectors';
import { getCompany, setCompany, updateCompany } from './../../store/companies.actions';
import { Component, OnDestroy, AfterViewInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PartialDeep } from 'type-fest';

@Component({
  selector: 'vc-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: [
    './company-edit.component.scss',
  ],
})

export class CompanyEditComponent implements AfterViewInit, OnDestroy {
  selectedCompany$ = this.store.select(selectSelectedCompany);

  unsubscriber = new Subject();

  constructor(
    private readonly store: Store,
    private readonly route: ActivatedRoute
  ) {  }

  ngAfterViewInit(): void {
    this.route.paramMap.pipe(takeUntil(this.unsubscriber)).subscribe(params => {
      const id = params.get('id');
      if (id === 'current') {
        this.store.select(selectCurrentCustomerOrganization)
          .subscribe(organization => this.store.dispatch(getCompany({ id: organization?.id as string })));
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

  submit(): void {
    this.store.dispatch(updateCompany());
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}

