export class AccountModel{
  email: string = "";
  name_first: string = "";
  name_last: string = "";
  scopes: string[] = [];
  apiToken: string = "";
  apiTokenExpiry: Date = new Date();  
}