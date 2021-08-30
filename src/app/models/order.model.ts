import { Mutable, PartialDeep } from 'type-fest';
import * as graphql from '../graphql/types/order';

import { Address } from './address.model';

type typeNameTemplate = '__typename'

export interface Order extends PartialDeep<Mutable<Omit<graphql.order_order,
    typeNameTemplate | 'items' >>> {
  items?: OrderItem[];
  gifts?: OrderItem[];
  shipment?: OrderShipment;
  payment?: OrderPayment;
}

export type OrderItem = Mutable<Omit<graphql.order_order_items, typeNameTemplate>>

export interface OrderShipment extends PartialDeep<Mutable<Omit<graphql.order_order_shipments,
  typeNameTemplate | 'deliveryAddress'>>> {
    deliveryAddress?: Address;
    iconUrl?: string | null;
}

export interface OrderPayment extends PartialDeep<Mutable<Omit<graphql.order_order_inPayments,
  typeNameTemplate | 'billingAddress'>>> {
    billingAddress?: Address;
    iconUrl?: string | null;
}
