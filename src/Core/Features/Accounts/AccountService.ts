import { ServiceBase } from "../Common/ServiceBase";
import { useAccountServiceState, type IAccountServiceState } from "./AccountServiceState";
import type { LogInHandler } from "./LogIn/LogInHandler";
import type { LogInRequest } from "./LogIn/LogInRequest";
import type { LogInResult } from "./LogIn/LogInResult";

export class AccountService extends ServiceBase<IAccountServiceState>{
  
  logInHandler: LogInHandler;

  constructor({
    logInHandler
  }:{
    logInHandler: LogInHandler;
  }){    
    console.log("AccountService.constructor");
    super(useAccountServiceState());
    this.logInHandler = logInHandler;
  }

  LogIn = async (request: LogInRequest): Promise<LogInResult> => {
    console.log("AccountService.getToken");

    const result = await this.logInHandler.handle(request);    
    return result;

  };
 
  Register = async (/* registerRequest: RegistrationRequest */) => {
    // ...
  };

}
