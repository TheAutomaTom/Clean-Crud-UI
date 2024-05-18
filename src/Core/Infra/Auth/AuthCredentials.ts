export class AuthCredentials{  
  
  ValidToken =():string|null=> {
    if(this.expiry > new Date()){
      return this.token;
    } else{
      return null;
    }
  };
  
  private token: string = "";
  private expiry: Date;
  private readonly tokenTimeToLive = 1; // minute(s)
  private scopes: string[];
  
  Email: string;
  Name_first: string;
  Name_last: string;
  
  constructor(
    token: string, 
    scopes: string[],
    email: string,
    name_first: string,
    name_last: string
  ) {
    this.token = token;
    this.expiry = this.updateTokenExpiration();

    this.scopes = scopes;
    
    this.Email = email;
    this.Name_first = name_first;
    this.Name_last = name_last;
  }

  private updateTokenExpiration =():Date=> {
    const update = new Date().setMinutes(this.tokenTimeToLive);
    return new Date(update);
  };

}
