import type { LogInRequest } from "./LogInRequest";
import { LogInResult } from "./LogInResult";
import type { IAccountsClient } from "../../../Interfaces/IAccountClient";
import { TokenInfo } from "@/Core/Infra/Accounts/AuthenticationInfo/TokenInfo";

export class LogInHandler{
  _client: IAccountsClient;

  constructor(client: IAccountsClient) {    
    console.log("TryLogInHandler.constructor()");
    this._client = client;    
  }

  async handle(request: LogInRequest): Promise<LogInResult>{
    console.log("TryLogInHandler.handle");

    const response = await this._client.LogIn(request.UserName, request.Password);

    return new LogInResult( response );

  }
}
