export interface CurrentOrganization {
  id: string,
  name: string,
}

export interface CurrentContact {
  id: string,
  firstName: string,
  lastName: string,
  fullName: string
}

export interface CurrentCustomer {
  id: string,
  userName: string,
  contact: CurrentContact,
  organization: CurrentOrganization
}
