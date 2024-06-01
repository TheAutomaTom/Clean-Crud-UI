import type { IKeycloakToken } from "./Dtos/IKeycloakToken";
import { TokenUsability } from "./TokenUsability";

export class Token{
  Access: string;
  Refresh: string;
  AccessExpiry: Date;
  RefreshExpiry: Date;
  
  constructor( dto: IKeycloakToken ) {
    
    this.Access = dto.access_token;
    this.AccessExpiry = new Date();
    this.AccessExpiry.setSeconds(dto.expires_in);
    
    this.Refresh = dto.refresh_token;
    this.RefreshExpiry = new Date();
    this.RefreshExpiry.setSeconds(dto.refresh_expires_in);

  }

  NextUse =(): TokenUsability => {
    
    const now = new Date();
    now.setSeconds(5);

    if(this.AccessExpiry < now){
      return TokenUsability.UseCurrent;
    }
    else 
    {
      if(this.RefreshExpiry < now){
        return TokenUsability.Refresh;
      } 
    }
    return TokenUsability.GetNew;
    
  };

}
