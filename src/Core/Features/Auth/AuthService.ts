
import type { AuthenticatedAccount } from "../../Infra/AuthenticatedAccount/AuthenticatedAccount";
import type { GetNewTokenHandler } from "./Tokens/GetNew/GetNewTokenHandler";
import type { IAuthService } from "@/App/Interfaces/IAuthService";
import type { LogInHandler } from "./LogIn/LogInHandler";
import type { LogInRequest } from "./LogIn/LogInRequest";
import type { RefreshTokenHandler } from "./Tokens/Refresh/RefreshTokenHandler";
import type { RegistrationHandler } from "./Register/RegistrationHandler";
import type { RegistrationRequest } from "./Register/RegistrationRequest";

export class AuthService implements IAuthService{
  
  logInHandler: LogInHandler;
  registrationHandler: RegistrationHandler;
  getNewTokenHandler: GetNewTokenHandler;
  refreshTokenHandler: RefreshTokenHandler;

  constructor({
    logInHandler,
    registrationHandler,
    getNewTokenHandler,
    refreshTokenHandler
  }:{
    logInHandler: LogInHandler;
    registrationHandler: RegistrationHandler;
    getNewTokenHandler: GetNewTokenHandler;
    refreshTokenHandler: RefreshTokenHandler;
  }){    
    console.log("AuthService.constructor");
    this.logInHandler = logInHandler;
    this.registrationHandler = registrationHandler;
    this.getNewTokenHandler = getNewTokenHandler;
    this.refreshTokenHandler = refreshTokenHandler;
  }

  // State ======================================================//
  // GetSavedToken =()=> this.authenticatedAccount.Credential.accessToken.Validate();

  // SaveToken =(token: IKeycloakToken)=> {
  //   console.log("AccountService.SaveToken");    
  //   this.authenticatedAccount.Credential.accessTokens = new Token(token);
  // };

  // GetToken=()=>{
  //   switch ( this.authenticatedAccount.Credential.accessTokens.NextUse()) {
  //     case TokenUsability.UseCurrent:
  //       return this.authenticatedAccount.Credential.accessTokens.Access;

  //     case TokenUsability.Refresh:
  //       return TokenUsability.Refresh;

  //     default: //case TokenUsability.GetNew:
  //     return TokenUsability.GetNew;
  //   }
  // };

  // Features ===================================================//
  LogIn = async (request: LogInRequest): Promise<AuthenticatedAccount> => {
    console.log("AccountService.LogIn");

    const result = await this.logInHandler.handle(request);    
    return result;

  };
 
  Register = async ( request: RegistrationRequest): Promise<AuthenticatedAccount> => {
    console.log("AccountService.Register");
    const result = await this.registrationHandler.handle(request);
    
    return result;
  };

}
