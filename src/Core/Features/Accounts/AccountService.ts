import type { LogInHandler } from "./LogIn/LogInHandler";
import type { LogInRequest } from "./LogIn/LogInRequest";
import type { LogInResult } from "./LogIn/LogInResult";
import type { RegistrationHandler } from "./Register/RegistrationHandler";
import { AuthenticationInfo } from "@/Core/Infra/Accounts/AuthenticationInfo/AuthenticationInfo";
import type { RegistrationResult } from "./Register/RegistrationResult";
import { TokenInfo } from "@/Core/Infra/Accounts/AuthenticationInfo/TokenInfo";
import type { RegistrationRequest } from "./Register/RegistrationRequest";

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
    console.log("AccountService.SaveToken");
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
    console.log("AccountService.LogIn");

    const result = await this.logInHandler.handle(request);    
    return result;

  };
 
  Register = async ( request: RegistrationRequest): Promise<RegistrationResult> => {
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
