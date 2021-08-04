import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { cart_cart_items_dynamicProperties } from 'src/app/graphql/types/cart';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { removeCartItem } from 'src/app/store/cart/cart.actions';

@Component({
  selector: 'vc-line-items',
  templateUrl: './line-items.component.html',
  styleUrls: [
    './line-items.component.scss',
  ],
})

export class LineItemsComponent {
  @Input() cart?: Cart;

  constructor(
    private readonly store: Store
  ) { }

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

  update(): void {
    // TODO
  }

  remove(item: CartItem | null): void {
    if (item != null) {
      this.store.dispatch(removeCartItem({
        lineItemId: item.id,
      }));
    }
  }
}

interface DisplayItem {
  readonly name: string | null | undefined;
  readonly displayValue: string | null;
}
