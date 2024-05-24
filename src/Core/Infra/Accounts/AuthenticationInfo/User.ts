export class User {
  Id: string;
  Username: string;
  FirstName: string;
  LastName: string;
  Email: string;
  EmailVerified: boolean;
  // CreatedTimestamp: number;
  Enabled: boolean;
  // Totp: boolean;
  // NotBefore: number;

  constructor(
    id: string,
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    emailVerified: boolean,
    // createdTimestamp: number,
    enabled: boolean
    // totp: boolean,
    // notBefore: number
  ) {
    this.Id = id;
    this.Username = username;
    this.FirstName = firstName;
    this.LastName = lastName;
    this.Email = email;
    this.EmailVerified = emailVerified;
    // this.CreatedTimestamp = createdTimestamp;
    this.Enabled = enabled;
    // this.Totp = totp;
    // this.NotBefore = notBefore;
  }
}
