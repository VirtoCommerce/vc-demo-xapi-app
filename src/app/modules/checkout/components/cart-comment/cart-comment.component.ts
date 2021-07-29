import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'vc-cart-comment',
  templateUrl: './cart-comment.component.html',
  styleUrls: [
    './cart-comment.component.scss',
  ],
})
export class CartCommentComponent {
  @Input() cartCommentText?: string | null;

  @Output() commentUpdateEvent = new EventEmitter<string | null>()

  cartComment = new FormControl();

  debounceWatcher: Subject<string> = new Subject<string>();

  debounceTime = 1000;

  constructor() {
    this.debounceWatcher.pipe(
      debounceTime(this.debounceTime),
      distinctUntilChanged()
    )
      .subscribe(comment => this.sendCommentUpdate(comment));
  }

  sendCommentUpdate(comment: string): void {
    this.commentUpdateEvent.emit(comment);
  }

  onModelChange(comment: string): void {
    this.debounceWatcher.next(comment);
  }
}
