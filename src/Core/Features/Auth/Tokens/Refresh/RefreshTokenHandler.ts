import type { RefreshTokenRequest } from "./RefreshTokenRequest";
import type { IAuthClient } from "../../../../Interfaces/IAuthClient";
import type { Token } from "@/Core/Infra/AuthenticatedAccount/AccessTokens";

export class RefreshTokenHandler{
  _client: IAuthClient;

  constructor(client: IAuthClient) {    
    console.log("RefreshTokenHandler.constructor()");
    this._client = client;    
  }

  async handle(request: RefreshTokenRequest): Promise<Token>{
    console.log("RefreshTokenHandler.handle");

    const result = await this._client.RefreshToken(request);
    
    return result; 

  }
}
