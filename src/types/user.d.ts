export type UserType = {
  id: string
  name: string
  username: string
  email: string
  phone: string
  website: string
  address: AddressType
  company: CompanyType
}

export type AddressType = {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: {
    lat: string
    lng: string
  }
}

export type CompanyType = {
  name: string
  catchPhrase: string
  bs: string
}
