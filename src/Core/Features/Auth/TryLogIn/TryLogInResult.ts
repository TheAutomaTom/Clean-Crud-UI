/// This class can be used to create AuthCredentials and an AccountDetail
export class TryLogInResult{
  Token: string;
  Scopes: string[];
  Username: string;
  Email: string;
  NameFirst: string;
  NameLast: string;
  RegistrationStatus: boolean;
  
  constructor(
    token: string,
    scopes: string[],
    username: string,
    email: string,
    nameFirst: string,
    nameLast: string,
    registrationStatus: boolean
  ) {
    this.Token = token;
    this.Scopes = scopes;
    this.Username = username;
    this.Email = email;
    this.NameFirst = nameFirst;
    this.NameLast = nameLast;
    this.RegistrationStatus = registrationStatus;
  }
}
