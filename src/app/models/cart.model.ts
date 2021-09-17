import { Mutable, PartialDeep } from 'type-fest';
import * as graphql from '../graphql/types/cart';

type typeNameTemplate = '__typename'

export interface Cart extends Mutable<Omit<graphql.cart_cart,
  typeNameTemplate |
  'dynamicProperties' |
  'coupons' |
  'items' |
  'shipments' |
  'payments' |
  'availableGifts' |
  'availablePaymentMethods' |
  'availableShippingMethods'>> {
  dynamicProperties: DynamicProperty[];
  coupons: Coupon[];
  items: CartItem[];
  shipments: Shipment[];
  payments: Payment[];
  availableGifts: Gift[];
  availablePaymentMethods: PaymentMethod[];
  availableShippingMethods: ShippingMethod[];
}

export type DynamicProperty = Mutable<Omit<graphql.cart_cart_dynamicProperties, typeNameTemplate>>

export type Coupon = Mutable<Omit<graphql.cart_cart_coupons, typeNameTemplate>>

export type CartItem = Mutable<Omit<graphql.cart_cart_items, typeNameTemplate>>

export interface Shipment extends PartialDeep<Mutable<Omit<graphql.cart_cart_shipments,
  typeNameTemplate | 'deliveryAddress'>>> {
  deliveryAddress?: CartAddress;
}

export interface Payment extends PartialDeep<Mutable<Omit<graphql.cart_cart_payments,
  typeNameTemplate | 'billingAddress'>>> {
  billingAddress?: CartAddress;
}

export type CartAddress = Partial<Mutable<Omit<graphql.cart_cart_shipments_deliveryAddress, typeNameTemplate>>>

export type PaymentMethod = Partial<Mutable<Omit<graphql.cart_cart_availablePaymentMethods, typeNameTemplate>>>

export interface PaymentMethodRecord extends PaymentMethod {
  isActive: boolean;
}

export type ShippingMethod = Partial<Mutable<Omit<graphql.cart_cart_availableShippingMethods, typeNameTemplate>>>

export interface ShippingMethodRecord extends ShippingMethod {
  isActive: boolean;
}

export type Gift = Mutable<Omit<graphql.cart_cart_availableGifts, typeNameTemplate>>
