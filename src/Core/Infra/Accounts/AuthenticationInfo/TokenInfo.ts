export class TokenInfo{    
  // TODO: Move to env/ app settings
  private readonly tokenTimeToLive = 1; // minute(s)

  TryGetValidToken =(): string => {
    if(this.expiry > new Date()){
      return this.accessToken;
    } else{
      // TODO: Handle refreshExpiry
      return "";
    }
  };
  
  private accessToken: string = "";
  private expiry: Date;
  private refreshExpiry: Date;
  
  constructor(
    accessToken: string
  ) {
    this.accessToken = accessToken;
    this.expiry = this.updateTokenExpiration();

    // TODO: Handle refreshExpiry
    this.refreshExpiry = this.updateTokenExpiration();
  }

  private updateTokenExpiration =():Date=> {
    
    // TODO: Handle refreshExpiry

    const update = new Date().setMinutes(this.tokenTimeToLive);
    return new Date(update);
  };

}
