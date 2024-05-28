import type { AuthenticatedAccount } from "./../../Infra/AuthenticatedAccount/AuthenticatedAccount";
import type { LogInHandler } from "./LogIn/LogInHandler";
import type { LogInRequest } from "./LogIn/LogInRequest";
import type { RegistrationHandler } from "./Register/RegistrationHandler";
import type { RegistrationRequest } from "./Register/RegistrationRequest";
import { AccessToken } from "./../../Infra/AuthenticatedAccount/AccessToken";

export class AccountService {
  
  authenticatedAccount: AuthenticatedAccount;
  logInHandler: LogInHandler;
  registrationHandler: RegistrationHandler;

  constructor({
    logInHandler,
    registrationHandler
  }:{
    logInHandler: LogInHandler;
    registrationHandler: RegistrationHandler;
  }){    
    console.log("AccountService.constructor");
    this.authenticatedAccount = {} as AuthenticatedAccount;
    this.logInHandler = logInHandler;
    this.registrationHandler = registrationHandler;
  }

  // State ======================================================//
  GetSavedToken =()=> this.authenticatedAccount.Credential.accessToken.TryGetValidToken();

  SaveToken =(token: string)=> {    
    console.log("AccountService.SaveToken");    
    this.authenticatedAccount.Credential.accessToken = new AccessToken(token);
  };

  // Features ===================================================//
  LogIn = async (request: LogInRequest): Promise<AuthenticatedAccount> => {
    console.log("AccountService.LogIn");

    const result = await this.logInHandler.handle(request);    
    return result;

  };
 
  Register = async ( request: RegistrationRequest): Promise<AuthenticatedAccount> => {
    console.log("AccountService.Register");
    const result = await this.registrationHandler.handle(request);  
    // // ...
    // return new RegistrationResult(
    //   new AuthenticationInfo(
    //     new TokenInfo("...")
    //   )
    // );
    return result;
  };

}
