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

export interface CurrentUser {
  id: string,
  userName: string,
  contact: CurrentContact,
  organization: CurrentOrganization
}
