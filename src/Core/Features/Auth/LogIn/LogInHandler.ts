import type { LogInRequest } from "./LogInRequest";
import type { IAuthClient } from "../../../Interfaces/IAuthClient";
import type { AuthenticatedAccount } from "@/Core/Infra/AuthenticatedAccount/AuthenticatedAccount";

export class LogInHandler{
  _client: IAuthClient;

  constructor(client: IAuthClient) {    
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
