import { Mutable } from 'type-fest';
import * as graphql from '../graphql/types/cart';

type typeNameTemplate = '__typename'

export interface Cart extends Mutable<Omit<graphql.cart_cart,
  typeNameTemplate | 'dynamicProperties' | 'coupons' | 'items' | 'shipments'>> {
  dynamicProperties: DynamicProperty[];
  coupons: Coupon[];
  items: CartItem[];
  shipments: Shipment[];
}

export type DynamicProperty = Mutable<Omit<graphql.cart_cart_dynamicProperties, typeNameTemplate>>

export type Coupon = Mutable<Omit<graphql.cart_cart_coupons, typeNameTemplate>>

export type CartItem = Mutable<Omit<graphql.cart_cart_items, typeNameTemplate>>

export interface Shipment extends Mutable<Omit<graphql.cart_cart_shipments, typeNameTemplate | 'deliveryAddress'>> {
  deliveryAddress: CartAddress;
}

export type CartAddress = Partial<Mutable<Omit<graphql.cart_cart_shipments_deliveryAddress, typeNameTemplate>>>
