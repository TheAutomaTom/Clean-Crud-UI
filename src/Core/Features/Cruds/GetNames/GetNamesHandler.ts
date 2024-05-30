import type { GetNamesRequest } from "./GetNamesRequest";
import type { ICrudClient } from "../../../Interfaces/ICrudClient";

export class GetNamesHandler{
  _client: ICrudClient;

  constructor(client: ICrudClient) {    
    console.log("GetNamesHandler.constructor()");
    this._client = client;    
  }

  async handle(request: GetNamesRequest): Promise<string[]>{
    console.log("GetNamesHandler.handle");

    const result = await this._client.GetNames(request.Page);
    
    return result; 

  }
}
