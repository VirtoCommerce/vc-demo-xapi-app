export interface CompanyAddress {
  postalCode: string;
  countryCode: string;
  countryName: string;
  city: string;
  line1: string;
  line2: string;
}

export interface CompanyMember {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  userName: string;
  password: string;
}

export interface CompanyRegistration {
  name: string;
  owner: CompanyMember;
  address: CompanyAddress;
  sector: string;
  taxNumber: string;
}
