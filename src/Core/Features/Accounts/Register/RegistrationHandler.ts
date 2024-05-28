import type { RegistrationRequest } from "./RegistrationRequest";
import type { RegistrationResult } from "./RegistrationResult";
import type { IAccountsClient } from "../../../Interfaces/IAccountClient";

export class RegistrationHandler{
  _client: IAccountsClient;

  constructor(client: IAccountsClient) {    
    console.log("RegisterHandler.constructor()");
    this._client = client;    
  }

  async handle(request: RegistrationRequest): Promise<RegistrationResult>{
    console.log("RegisterHandler.handle");

    const result = this._client.RegisterNewAccount(
      request.Username,
      request.FirstName,
      request.LastName,
      request.Email,
      request.Password

    );
    
    return result; 

  }
}
