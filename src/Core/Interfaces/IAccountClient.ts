import type { LogInResponse } from "../Infra/Accounts/LogInResponse";
import type { RegistrationResponse } from "../Infra/Accounts/RegistrationResponse";

export interface IAccountsClient{

  LogIn(name: string, pass: string): Promise<LogInResponse>;
  
  Register(
    username : string,
    firstName : string,
    lastName : string,
    email : string,
    password : string
  ): Promise<RegistrationResponse>;

}