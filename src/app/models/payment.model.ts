import { Mutable } from 'type-fest';
import * as graphql from '../graphql/types/payments';

type typeNameTemplate = '__typename'

export interface PaymentResult extends Mutable<Omit<graphql.payments_payments,
    'items' |
    typeNameTemplate>> {
    items: Payment[]
}

export type Payment = Mutable<Omit<graphql.payments_payments_items,
    typeNameTemplate>>
