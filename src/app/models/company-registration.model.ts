export interface CompanyAddress {
  postalCode: string;
  countryCode: string;
  countryName: string;
  city: string;
  line1: string;
  line2: string;
}

export interface CompanyOwner {
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  password: string;
}

export interface CompanyRegistration {
  name: string;
  owner: CompanyOwner;
  address: CompanyAddress;
}
