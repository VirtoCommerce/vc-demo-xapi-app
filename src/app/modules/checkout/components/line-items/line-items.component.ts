import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { cart_cart_items_dynamicProperties } from 'src/app/graphql/types/cart';
import { CartItem } from 'src/app/models/cart.model';
import { changeCartItemQuantity, removeCartItem } from 'src/app/store/cart/cart.actions';
import { selectItems } from 'src/app/store/cart/cart.selectors';

@Component({
  selector: 'vc-line-items',
  templateUrl: './line-items.component.html',
  styleUrls: [
    './line-items.component.scss',
  ],
})

export class LineItemsComponent implements OnInit, OnDestroy {
  unsubscriber = new Subject();

  items: CartItem[] = [];

  constructor(
    private readonly store: Store
  ) { }

  ngOnInit(): void {
    this.store.select(selectItems)
      .pipe(takeUntil(this.unsubscriber))
      .subscribe(items => {
        this.items = items.map(li => ({ ...li }));
      });
  }

  private readonly typesToCheck: string[] = [
    'Integer',
    'ShortText',
    'DateTime',
  ];

  getDynamicPropertiesToDisplay(
    props: ReadonlyArray<(cart_cart_items_dynamicProperties | null)> | null
  ): DisplayItem[] {
    if (props == null) {
      return [];
    }

    return props.filter(p => this.typesToCheck.includes(p?.valueType ?? '') && p?.value || p?.valueType === 'Boolean')
      .map(p => {
        let displayValue = '';

        switch (p?.valueType) {
        case 'Boolean':
          displayValue = p?.value && p.value.toLowerCase() === 'true' ? 'yes' : 'no';
          break;

        case 'DateTime':
          if (p?.value) {
            displayValue = new Date(p.value).toLocaleDateString();
          }
          break;

        default:
          displayValue = p?.value ?? '';
          break;
        }

        return {
          name: p?.name,
          displayValue,
        };
      });
  }

  update(item: CartItem | null): void {
    if (item != null && (item.quantity ?? 0) > 0) {
      this.store.dispatch(changeCartItemQuantity({
        lineItemId: item.id,
        quantity: item.quantity ?? 1,
      }));
    }
  }

  remove(item: CartItem | null): void {
    if (item != null) {
      this.store.dispatch(removeCartItem({
        lineItemId: item.id,
      }));
    }
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}

interface DisplayItem {
  readonly name: string | null | undefined;
  readonly displayValue: string | null;
}
