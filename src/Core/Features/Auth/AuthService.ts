import type AuthState from "./AuthState";
import { ServiceBase } from "../Common/ServiceBase";
import type { GetTokenHandler } from "./GetToken/GetTokenHandler";
import type { GetTokenRequest } from "./GetToken/GetTokenRequest";
import { GetTokenResult } from "./GetToken/GetTokenResult";

export class AuthService extends ServiceBase<AuthState>{
  
  getTokenHandler: GetTokenHandler;

  constructor({
    store,
    getTokenHandler
  }:{
    store: AuthState;
    getTokenHandler: GetTokenHandler;
  }){
    super(store);
    this.getTokenHandler = getTokenHandler;
    console.log("AuthService.constructor");
  }

  getToken = async (request: GetTokenRequest): Promise<GetTokenResult> => {
    console.log("AuthService.getToken");

    const creds = await this.getTokenHandler.handle(request);
    const result = new GetTokenResult(creds);
    return result;

  };

}