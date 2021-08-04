import { Mutable } from 'type-fest';
import * as graphql from '../graphql/types/cart';

type typeNameTemplate = '__typename'

export interface Cart extends Mutable<Omit<graphql.cart_cart, typeNameTemplate | 'items'>> {
  itemsData: CartItem[];
}

export type CartItem = Mutable<graphql.cart_cart_items>
