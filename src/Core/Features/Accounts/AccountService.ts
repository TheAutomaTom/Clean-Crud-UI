import type { LogInHandler } from "./LogIn/LogInHandler";
import type { LogInRequest } from "./LogIn/LogInRequest";
import type { LogInResult } from "./LogIn/LogInResult";
import { AuthenticationInfo } from "@/Core/Infra/Accounts/AuthenticationInfo";
import { TokenInfo } from "@/Core/Infra/Accounts/AuthenticationInfo/TokenInfo";
import type { RegistrationHandler } from "./Register/RegistrationHandler";

export class AccountService {
  
  authInfo: AuthenticationInfo;
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
    this.authInfo = {} as AuthenticationInfo;
    this.logInHandler = logInHandler;
    this.registrationHandler = registrationHandler;
  }

  // State ======================================================//
  GetSavedToken =()=> this.authInfo.TokenInfo.TryGetValidToken();

  SaveToken =(token: string)=> {    
    if(this.authInfo == null){
      this.authInfo = new AuthenticationInfo(
        // new User(), 
        new TokenInfo(token)
      );
      return;
    }
    this.authInfo.TokenInfo = new TokenInfo(token);
  };

  // Features ===================================================//
  LogIn = async (request: LogInRequest): Promise<LogInResult> => {
    console.log("AccountService.getToken");

    const result = await this.logInHandler.handle(request);    
    return result;

  };
 
  Register = async (/* registerRequest: RegistrationRequest */) => {
    // ...
  };

}
