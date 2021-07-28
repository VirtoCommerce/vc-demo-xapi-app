export interface Cart {
    id?: string,
    customerId?: string,
    comment?: string,
    name?: string,
    items?: CartItem[],
}

export interface CartItem {
    id?: string,
    name?: string,
    quantity?: number,
    productId?: string,
}
