import type { GetNamesHandler } from "./GetNames/GetNamesHandler";
import type { GetNamesRequest } from "./GetNames/GetNamesRequest";

export class CrudService {
  
  getNamesHandler: GetNamesHandler;  

  constructor({
    getNamesHandler
  }:{
    getNamesHandler: GetNamesHandler;
  }){    
    console.log("CrudService.constructor");
    this.getNamesHandler = getNamesHandler;
  }

  // Features ===================================================//
  GetNames = async (request: GetNamesRequest): Promise<string[]> => {
    console.log("CrudService.GetNames");

    const result = await this.getNamesHandler.handle(request);    
    return result;

  };
 
}
