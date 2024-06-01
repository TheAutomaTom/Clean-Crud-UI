import type { RegistrationRequest } from "./RegistrationRequest";
import type { IAuthClient } from "../../../Interfaces/IAuthClient";
import type { AuthenticatedAccount } from "@/Core/Infra/AuthenticatedAccount/AuthenticatedAccount";

export class RegistrationHandler{
  _client: IAuthClient;

  constructor(client: IAuthClient) {    
    console.log("RegisterHandler.constructor()");
    this._client = client;    
  }

  async handle(request: RegistrationRequest): Promise<AuthenticatedAccount>{
    console.log("RegisterHandler.handle");

    const result = await this._client.RegisterNewAccount(
                                        request.Username,
                                        request.FirstName,
                                        request.LastName,
                                        request.Email,
                                        request.Password

                                      );
    
    return result; 

  }
}
