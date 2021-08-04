import { Mutable } from 'type-fest';
import * as graphql from '../graphql/types/cart';

type typeNameTemplate = '__typename'

export interface Cart extends Mutable<Omit<graphql.cart_cart,
    typeNameTemplate | 'dynamicProperties' | 'coupons'>> {
        dynamicProperties: DynamicProperty[];
        coupons: Coupon[];
    }

export type DynamicProperty = Mutable<Omit<graphql.cart_cart_dynamicProperties, typeNameTemplate>>

export type Coupon = Mutable<Omit<graphql.cart_cart_coupons, typeNameTemplate>>

export type CartItem = Mutable<Omit<graphql.cart_cart_items, typeNameTemplate>>
