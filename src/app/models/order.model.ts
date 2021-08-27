import { Mutable } from 'type-fest';
import * as graphql from '../graphql/types/orders';

type typeNameTemplate = '__typename'

// Export interface Order extends graphql.orders_orders_items { }

export interface Order extends Mutable<Omit<graphql.orders_orders_items,
    'dynamicProperties' |
    typeNameTemplate>> {
    dynamicProperties: DynamicProperty[];
}

export type DynamicProperty = Mutable<Omit<graphql.orders_orders_items_dynamicProperties, typeNameTemplate>>
