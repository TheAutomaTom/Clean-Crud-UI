import type { AuthenticationInfo } from "../Infra/Accounts/AuthenticationInfo";

export interface IAccountsClient{

  LogIn(name: string, pass: string): Promise<AuthenticationInfo>;
  
  Register(
    username : string,
    firstName : string,
    lastName : string,
    email : string,
    password : string
  ): Promise<AuthenticationInfo>;

}