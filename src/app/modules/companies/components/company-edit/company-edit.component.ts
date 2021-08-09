import { Component, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({

  selector: 'vc-company-edit',

  templateUrl: './company-edit.component.html',

  styleUrls: [
    './company-edit.component.scss',
  ],

})

export class CompanyEditComponent implements OnDestroy {
  id: string | undefined;

  unsubscriber = new Subject();

  constructor(private readonly route: ActivatedRoute) {
    this.route.params.pipe(takeUntil(this.unsubscriber)).subscribe(params => this.id = params['id'] as string);
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}

