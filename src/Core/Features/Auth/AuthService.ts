import type AuthState from "./AuthServiceState";
import { ServiceBase } from "../Common/ServiceBase";
import type { GetTokenHandler } from "./TryLogIn/TryLogInHandler";
import type { TryLogInRequest } from "./TryLogIn/TryLogInRequest";
import { GetTokenResult } from "./TryLogIn/TryLogInResult";

export class AuthService extends ServiceBase<AuthState>{
  
  getTokenHandler: GetTokenHandler;

  constructor({
    authServiceState,
    getTokenHandler
  }:{
    authServiceState: AuthState;
    getTokenHandler: GetTokenHandler;
  }){
    super(authServiceState);
    this.getTokenHandler = getTokenHandler;
    console.log("AuthService.constructor");
  }

  tryLogIn = async (request: TryLogInRequest): Promise<GetTokenResult> => {
    console.log("AuthService.getToken");

    const creds = await this.getTokenHandler.handle(request);
    const result = new GetTokenResult(creds.Token);
    return result;

  };

}
