export class User {
  public readonly firstName!: string
  public readonly lastName!: string

  constructor (firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
  }
}
