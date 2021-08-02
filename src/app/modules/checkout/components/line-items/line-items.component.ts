import { Component, Input } from '@angular/core';
import { cart_cart_items_dynamicProperties } from 'src/app/graphql/types/cart';
import { Cart } from 'src/app/models/cart.model';

@Component({
  selector: 'vc-line-items',
  templateUrl: './line-items.component.html',
  styleUrls: [
    './line-items.component.scss',
  ],
})

export class LineItemsComponent {
  @Input() cart?: Cart;

  private readonly knownTypes: string[] = [
    'Boolean',
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

    return props.filter(p => this.knownTypes.includes(p?.valueType ?? ''))
      .map(p => {
        let displayValue = p?.value ?? '';
        if (p?.valueType == 'DateTime' && p?.value) {
          displayValue = new Date(p.value).toLocaleDateString();
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

  remove(): void {
    // TODO
  }
}

interface DisplayItem {
  readonly name: string | null | undefined;
  readonly displayValue: string | null;
}
