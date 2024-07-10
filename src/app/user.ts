export class User {
  email: string;
  password: string;
  adress: string;
  zipcode: string;

  constructor(
    email: string = '',
    password: string = '',
    adress: string = '',
    zipcode: string = ''
  ) {
    this.email = email;
    this.password = password;
    this.adress = adress;
    this.zipcode = zipcode;
  }
}
