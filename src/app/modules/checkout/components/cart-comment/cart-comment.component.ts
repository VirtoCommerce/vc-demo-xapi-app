import { Component, Input, Output, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Cart } from 'src/app/models/cart.model';

@Component({
  selector: 'vc-cart-comment',
  templateUrl: './cart-comment.component.html',
  styleUrls: [
    './cart-comment.component.scss',
  ],
})
export class CartCommentComponent implements OnInit, OnDestroy {
  @Input() cart?: Cart | null;

  @Output() commentUpdateEvent = new EventEmitter<string>()

  cartComment = new FormControl();

  debounceWatcher!: Subscription;

  sendCommentUpdate(): void {
    this.commentUpdateEvent.emit(this.cartComment.value);
  }

  ngOnInit(): void {
    this.debounceWatcher = this.cartComment.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(() => {
      this.sendCommentUpdate();
    });
  }

  ngOnDestroy(): void {
    this.debounceWatcher.unsubscribe();
  }
}
