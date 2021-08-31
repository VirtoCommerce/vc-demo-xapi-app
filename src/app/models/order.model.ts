import { Mutable, PartialDeep } from 'type-fest';
import * as graphqlOrder from '../graphql/types/order';
import * as graphqlOrders from '../graphql/types/orders';

import { Address } from './address.model';

type typeNameTemplate = '__typename'

export interface OrderRecord extends Mutable<Omit<graphqlOrders.orders_orders_items,
    'dynamicProperties' |
    typeNameTemplate>> {
    dynamicProperties: DynamicProperty[];
}

export type DynamicProperty = Mutable<Omit<graphqlOrders.orders_orders_items_dynamicProperties, typeNameTemplate>>

export interface Order extends PartialDeep<Mutable<Omit<graphqlOrder.order_order,
    typeNameTemplate | 'items' >>> {
  items?: OrderItem[];
  gifts?: OrderItem[];
  shipment?: OrderShipment;
  payment?: OrderPayment;
}

export type OrderItem = Mutable<Omit<graphqlOrder.order_order_items, typeNameTemplate>>

export interface OrderShipment extends PartialDeep<Mutable<Omit<graphqlOrder.order_order_shipments,
  typeNameTemplate | 'deliveryAddress'>>> {
    deliveryAddress?: Address;
    iconUrl?: string | null;
}

export interface OrderPayment extends PartialDeep<Mutable<Omit<graphqlOrder.order_order_inPayments,
  typeNameTemplate | 'billingAddress'>>> {
    billingAddress?: Address;
    iconUrl?: string | null;
}
