import type { TryLogInRequest } from "./TryLogInRequest";
import type { TryLogInResult } from "./TryLogInResult";
import type { IAuthClient } from "../../../Interfaces/IAuthClient";
import type { AuthCredentials } from "@/Core/Infra/Auth/AuthCredentials";

export class GetTokenHandler{
  _client: IAuthClient;

  constructor(client: IAuthClient) {    
    console.log("TryLogInHandler.constructor()");
    this._client = client;    
  }

  async handle(request: TryLogInRequest): Promise<TryLogInResult>{
    console.log("TryLogInHandler.handle");

    const creds = await this._client.TryGetToken(request.UserName, request.Password);
    const result = new GetTokenResult(creds);
    return result;    
  }
}