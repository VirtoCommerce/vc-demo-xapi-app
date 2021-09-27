import { Component, OnInit } from '@angular/core';
import { pageInfo, sortAscending, sortDescending } from './constants/pageInfo';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { getCompanies } from './store/companies.actions';
import { selectCompaniesListing } from './store/companies.selectors';
import { FilterValues } from './components/companies-list-filter-bar/filter-values.model';
import { CompaniesListingItem } from 'src/app/models/companies-listing-item.model';

@Component({
  selector: 'vc-companies',
  templateUrl: './companies.component.html',
  styleUrls: [
    './companies.component.scss',
  ],
})
export class CompaniesComponent implements OnInit {
  companies$ = this.store.select(selectCompaniesListing);

  cursor = pageInfo.cursor;

  page = pageInfo.page;

  pageSize = pageInfo.pageSize;

  faChevronLeft = faChevronLeft;

  faChevronRight = faChevronRight;

  sortDescending = sortDescending;

  sortAscending = sortAscending;

  sortDirection = this.sortDescending;

  filterValue: string | undefined = undefined;

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    const sortigExpression = this.getSortingExpression();
    this.loadCompanies(this.pageSize, this.cursor, sortigExpression, this.filterValue);
  }

  loadPage(page: number): void {
    this.cursor = (page * this.pageSize - this.pageSize).toString();
    const sortigExpression = this.getSortingExpression();
    this.loadCompanies(this.pageSize, this.cursor, sortigExpression, this.filterValue);
    this.page = page;
  }

  applySorting(): void {
    this.sortDirection = this.invertSortDirection(this.sortDirection);
    const sortigExpression = this.getSortingExpression();
    this.loadCompanies(this.pageSize, this.cursor, sortigExpression, this.filterValue);
  }

  onFilterChange(data: FilterValues): void {
    this.filterValue = `${data.selectInputValue} status:${data.searchFilterValue}`;
    this.cursor = '0';
    const sortigExpression = this.getSortingExpression();
    this.loadCompanies(this.pageSize, this.cursor, sortigExpression, this.filterValue);
  }

  getCompanyAddress(company: Partial<CompaniesListingItem>): string {
    return `${company.address?.countryCode ?? ''} ${company.address?.regionName ?? ''} ${company.address?.city ?? ''} ${company.address?.line1 ?? ''} ${company.address?.postalCode ?? ''}`;
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
