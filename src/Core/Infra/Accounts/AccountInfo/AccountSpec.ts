export class AccountSpec {
  Guid: string;
  Username: string;
  FirstName: string;
  LastName: string;
  Email: string;
  EmailVerified: boolean;
  // UserRole: UserRole;

  constructor(
    
    guid: string,
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    emailVerified: boolean
    // UserRole: UserRole
    
  ) {
    this.Guid = guid;
    this.Username = username;
    this.FirstName = firstName;
    this.LastName = lastName;
    this.Email = email;
    this.EmailVerified = emailVerified;
  }
}
