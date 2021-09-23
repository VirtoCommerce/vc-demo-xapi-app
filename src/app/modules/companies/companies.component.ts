import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { pageInfo, sortAscending, sortDescending } from './constants/pageInfo';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { getCompanies } from './store/companies.actions';
import { Router } from '@angular/router';
import { selectCompaniesListing } from './store/companies.selectors';

@Component({
  selector: 'vc-companies',
  templateUrl: './companies.component.html',
  styleUrls: [
    './companies.component.scss',
  ],
})
export class CompaniesComponent implements OnInit, OnDestroy {
  unsubscriber = new Subject();

  companies$ = this.store.select(selectCompaniesListing);

  cursor = pageInfo.cursor;

  page = pageInfo.page;

  pageSize = pageInfo.pageSize;

  faChevronLeft = faChevronLeft;

  faChevronRight = faChevronRight;

  sortDescending = sortDescending;

  sortAscending = sortAscending;

  sortDirection = this.sortDescending;

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    const sortigExpression = this.getSortingExpression();
    this.loadCompanies(this.pageSize, this.cursor, sortigExpression);
  }

  loadPage(page: number): void {
    this.cursor = (page * this.pageSize - this.pageSize).toString();
    const sortigExpression = this.getSortingExpression();
    this.loadCompanies(this.pageSize, this.cursor, sortigExpression);
    this.page = page;
  }

  applySorting(): void {
    this.sortDirection = this.invertSortDirection(this.sortDirection);
    const sortigExpression = this.getSortingExpression();
    this.loadCompanies(this.pageSize, this.cursor, sortigExpression);
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }

  private loadCompanies(count?: number, cursor?: string, sort?: string, searchPhrase?: string): void {
    this.store.dispatch(getCompanies({
      count,
      cursor,
      sort,
      searchPhrase,
    }));
  }

  private invertSortDirection(sortDirection: string): string {
    return sortDirection === this.sortAscending ? this.sortDescending : this.sortAscending;
  }

  private getSortingExpression(): string {
    return `name:${this.sortDirection}`;
  }
}
