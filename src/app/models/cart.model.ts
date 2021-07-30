import * as graphql from '../graphql/types/cart';

export interface Cart extends graphql.cart_cart {
    itemsData: CartItem[];
}

export type CartItem = graphql.cart_cart_items
