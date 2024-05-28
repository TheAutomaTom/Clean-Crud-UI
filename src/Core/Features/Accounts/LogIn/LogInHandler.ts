import type { LogInRequest } from "./LogInRequest";
import { LogInResult } from "./LogInResult";
import type { IAccountsClient } from "../../../Interfaces/IAccountClient";

export class LogInHandler{
  _client: IAccountsClient;

  constructor(client: IAccountsClient) {    
    console.log("LogInHandler.constructor()");
    this._client = client;    
  }

  async handle(request: LogInRequest): Promise<LogInResult>{
    console.log("LogInHandler.handle start...");

    const response = await this._client.LogIn(request.UserName, request.Password);
    
    console.log(`LogInHandler.handle: ${response}`);
    console.dir(response);

    return new LogInResult( 
      response.AuthenticationInfo,
      response.AccountInfo
    );

  }
}
