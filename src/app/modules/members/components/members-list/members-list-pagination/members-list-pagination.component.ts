import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'vc-members-list-pagination',
  templateUrl: './members-list-pagination.component.html',
  styleUrls: [
    './members-list-pagination.component.scss',
  ],
})
export class MembersListPaginationComponent {
  @Input() totalCount: number | null = 0;

  @Input() page = 0;

  @Input() pageSize = 0;

  @Output() pageChange = new EventEmitter<number>();

  faChevronLeft = faChevronLeft;

  faChevronRight = faChevronRight;

  loadPage(page: number) {
    this.pageChange.emit(page);
  }
}
