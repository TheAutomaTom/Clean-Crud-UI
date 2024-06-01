import type { GetDocumentNamesHandler } from "./GetDocumentNames/GetDocumentNamesHandler";
import type { GetDocumentNamesRequest } from "./GetDocumentNames/GetDocumentNamesRequest";

export class CrudService {
  
  getDocumentNamesHandler: GetDocumentNamesHandler;  

  constructor({
    getDocumentNamesHandler
  }:{
    getDocumentNamesHandler: GetDocumentNamesHandler;
  }){    
    console.log("CrudService.constructor");
    this.getDocumentNamesHandler = getDocumentNamesHandler;
  }

  // Features ===================================================//
  GetDocumentNames = async (request: GetDocumentNamesRequest): Promise<string[]> => {
    console.log("CrudService.GetDocumentNames");

    const result = await this.getDocumentNamesHandler.handle(request);    
    return result;

  };
 
}
