import type { LogInRequest } from "@/Core/Features/Accounts/LogIn/LogInRequest";
import type { RegistrationRequest } from "@/Core/Features/Accounts/Register/RegistrationRequest";
import type { AuthenticatedAccount } from "@/Core/Infra/AuthenticatedAccount/AuthenticatedAccount";

export interface IAccountService{

  GetSavedToken():string;
  
  SaveToken(token: string):void;

  LogIn(logInRequest: LogInRequest): Promise<AuthenticatedAccount>;
  
  Register(registerRequest: RegistrationRequest): Promise<AuthenticatedAccount>;

}