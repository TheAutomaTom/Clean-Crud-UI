import type { GetTokenRequest } from "./GetTokenRequest";
import { GetTokenResult } from "./GetTokenResult";
import type { IAuthClient } from "../../../Interfaces/IAuthClient";
import type { AuthCredentials } from "@/Core/Infra/Auth/AuthCredentials";

export class GetTokenHandler{
  _client: IAuthClient;

  constructor(client: IAuthClient) {    
    console.log("GetTokenHandler.constructor()");
    this._client = client;    
  }

  async handle(request: GetTokenRequest): Promise<GetTokenResult>{
    console.log("LogInHandler.handle");

    const creds = await this._client.TryGetToken(request.UserName, request.Password);
    const result = new GetTokenResult(creds);
    return result;    
  }
}