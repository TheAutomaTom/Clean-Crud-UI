export class AccessToken{    
  // TODO: Move to env/ app settings
  private readonly tokenTimeToLive = 1; // minute(s)
  
  private accessToken: string = "";
  private expiry: Date;

  // TODO: Handle refreshExpiry
  // private refreshExpiry: Date;
  
  constructor( accessToken: string ) {
    this.accessToken = accessToken;
    this.expiry = this.updateTokenExpiration();

    // TODO: Handle refreshExpiry
    // this.refreshExpiry = this.updateTokenExpiration();
  }

  TryGetValidToken =(): string => {
    if(this.expiry > new Date()){
      return this.accessToken;
    } else{
      // TODO: Handle refreshExpiry
      return "";
    }
  };

  private updateTokenExpiration =():Date=> {
    
    // TODO: Handle refreshExpiry

    const update = new Date().setMinutes(this.tokenTimeToLive);
    return new Date(update);
  };

}