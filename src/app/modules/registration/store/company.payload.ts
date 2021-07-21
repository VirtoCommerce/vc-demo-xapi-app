export interface Company {
  name: string;
  owner: {
    firstName: string;
    lastName: string;
    email: string;
    userName: string;
    password: string;
  };
  address: {
    postalCode: string;
    countryCode: string;
    countryName: string;
    city: string;
    line1: string;
    line2: string;
  };
}
