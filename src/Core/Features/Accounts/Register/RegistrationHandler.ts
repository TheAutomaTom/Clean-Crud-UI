import type { RegistrationRequest } from "./RegistrationRequest";
import type { IAccountsClient } from "../../../Interfaces/IAccountClient";
import type { AuthenticatedAccount } from "@/Core/Infra/AuthenticatedAccount/AuthenticatedAccount";

export class RegistrationHandler{
  _client: IAccountsClient;

  constructor(client: IAccountsClient) {    
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
