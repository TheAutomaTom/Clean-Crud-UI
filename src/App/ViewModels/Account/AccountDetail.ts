export class AccountDetail{
  Username: string;
  Email: string;
  NameFirst: string;
  NameLast: string;
  RegistrationStatus: boolean;
  
  constructor(
    username: string,
    email: string,
    nameFirst: string,
    nameLast: string,
    registrationStatus: boolean
  ) {
    this.Username = username;
    this.Email = email;
    this.NameFirst = nameFirst;
    this.NameLast = nameLast;
    this.RegistrationStatus = registrationStatus;
  }
    
  


}