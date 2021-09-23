import { Address } from './address.model';

export interface CompaniesListingItem {
  id?: string | null,
  name?: string | null,
  phone?: string | null,
  email?: string | null,
  address?: Address | null
}
