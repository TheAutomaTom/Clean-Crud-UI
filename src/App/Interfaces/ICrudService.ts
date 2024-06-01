import type { GetDocumentNamesRequest } from "@/Core/Features/Cruds/GetDocumentNames/GetDocumentNamesRequest";

export interface ICrudService{
  
  GetDocumentNames(request: GetDocumentNamesRequest): Promise<string[]>;

}