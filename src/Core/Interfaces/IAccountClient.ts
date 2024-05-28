import type { LogInResult } from "../Features/Accounts/LogIn/LogInResult";
import type { RegistrationResponse } from "../Infra/Accounts/RegistrationResponse";

export interface IAccountsClient{

  LogIn(name: string, pass: string): Promise<LogInResult>;
  
  RegisterNewAccount(
    username : string,
    firstName : string,
    lastName : string,
    email : string,
    password : string
  ): Promise<RegistrationResponse>;

}