import type { GetNewTokenRequest } from "./GetNewTokenRequest";
import type { IAuthClient } from "../../../../Interfaces/IAuthClient";
import type { Token } from "@/Core/Infra/AuthenticatedAccount/AccessTokens";

export class GetNewTokenHandler{
  _client: IAuthClient;

  constructor(client: IAuthClient) {    
    console.log("GetNewTokenHandler.constructor()");
    this._client = client;    
  }

  async handle(request: GetNewTokenRequest): Promise<Token>{
    console.log("GetNewTokenHandler.handle");

    const result = await this._client.GetNewToken(request);
    
    return result; 

  }
}
