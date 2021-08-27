import { Pipe, PipeTransform } from '@angular/core';
import { DynamicProperty } from 'src/app/models/order.model';

@Pipe({
  name: 'propertyValue',
})
export class PropertyValuePipe implements PipeTransform {
  transform(items: DynamicProperty[] | null, name: string): string {
    return items?.find(x => x.name === name)?.value ?? '';
  }
}

export interface dynamicProperty {
  readonly name: string | null;
  readonly value: string | null;
}
