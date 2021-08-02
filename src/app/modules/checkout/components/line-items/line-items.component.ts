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
  ): displayItem[] {
    if (props == null) return [];

    const result = props.filter(p => this.knownTypes.includes(p?.valueType ?? ''))
      .map(p => {
        let displayValue = p?.value ?? '';
        switch (p?.valueType) {
        case 'DateTime':
          if (p?.value) {
            displayValue = new Date(p.value).toLocaleDateString();
          }
          break;

        default:
          break;
        }

        return {
          name: p?.name,
          displayValue: displayValue,
        };
      });

    return result;
  }

  update(): void {
    // TODO
  }

  remove(): void {
    // TODO
  }
}

interface displayItem {
  readonly name: string | null | undefined;
  readonly displayValue: string | null;
}
