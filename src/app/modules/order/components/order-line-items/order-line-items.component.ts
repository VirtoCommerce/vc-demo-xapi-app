import { Component, Input } from '@angular/core';
import { order_order_items_dynamicProperties as DynamicProperties } from 'src/app/graphql/types/order';
import { OrderItem } from 'src/app/models/order.model';

@Component({
  selector: 'vc-order-line-items',
  templateUrl: './order-line-items.component.html',
  styleUrls: [
    './order-line-items.component.scss',
  ],
})
export class OrderLineItemsComponent {
  @Input() items?: OrderItem[] | null;

  @Input() reorderAllowed = true;

  private readonly typesToCheck: string[] = [
    'Integer',
    'ShortText',
    'DateTime',
  ];

  getDynamicPropertiesToDisplay(properties: ReadonlyArray<(DynamicProperties | null)> | null): DisplayItem[] {
    if (properties == null) {
      return [];
    }

    return properties.filter(p => this.typesToCheck.includes(p?.valueType ?? '') &&
      p?.value || p?.valueType === 'Boolean')
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
}

interface DisplayItem {
  readonly name: string | null | undefined;
  readonly displayValue: string | null;
}
