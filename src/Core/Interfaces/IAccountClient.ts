import type { AuthenticatedAccount } from "../Infra/AuthenticatedAccount/AuthenticatedAccount";

export interface IAccountsClient{

  LogIn(name: string, pass: string): Promise<AuthenticatedAccount>;
  
  RegisterNewAccount(
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ): Promise<AuthenticatedAccount>;

}