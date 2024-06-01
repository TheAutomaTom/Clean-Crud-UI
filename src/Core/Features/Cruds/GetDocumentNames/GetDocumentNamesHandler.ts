import type { GetDocumentNamesRequest } from "./GetDocumentNamesRequest";
import type { ICrudClient } from "../../../Interfaces/ICrudClient";

export class GetDocumentNamesHandler{
  _client: ICrudClient;

  constructor(client: ICrudClient) {    
    console.log("GetDocumentNamesHandler.constructor()");
    this._client = client;    
  }

  async handle(request: GetDocumentNamesRequest): Promise<string[]>{
    console.log("GetDocumentNamesHandler.handle");

    const result = await this._client.GetNames(request.Page);
    
    return result; 

  }
}
