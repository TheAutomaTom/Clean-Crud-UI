import type { LogInRequest } from "./LogInRequest";
import type { IAccountsClient } from "../../../Interfaces/IAccountClient";
import type { AuthenticatedAccount } from "@/Core/Infra/AuthenticatedAccount/AuthenticatedAccount";

export class LogInHandler{
  _client: IAccountsClient;

  constructor(client: IAccountsClient) {    
    console.log("LogInHandler.constructor()");
    this._client = client;    
  }

  async handle(request: LogInRequest): Promise<AuthenticatedAccount>{
    console.log("LogInHandler.handle start...");

    const response = await this._client.LogIn(request.UserName, request.Password);
    
    console.log(`LogInHandler.handle: ${response}`);
    console.dir(response);

    return response;
  }
}
