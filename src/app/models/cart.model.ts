import * as graphql from '../graphql/types/cart';

export interface Cart {
    cartData: graphql.cart_cart | null;
    items: CartItem[];
}

export interface CartItem {
    itemData: graphql.cart_cart_items | null;
}
