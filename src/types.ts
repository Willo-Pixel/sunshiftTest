interface UserId {
    name: string,
    value: string
}

interface StreetTypes {
    number: number,
    name: string
}

interface UserLocation {
    street: StreetTypes,
    city: string,
    state: string,
    country: string,
    postcode: string

}

export interface UserListTypes {
    image: string,
    firstName: string,
    lastName:string,
    email: string,
    phone: string,
    id: UserId,
    location: UserLocation
  }
