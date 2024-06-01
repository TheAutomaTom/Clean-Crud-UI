import type { LogInRequest } from "@/Core/Features/Auth/LogIn/LogInRequest";
import type { RegistrationRequest } from "@/Core/Features/Auth/Register/RegistrationRequest";
import type { AuthenticatedAccount } from "@/Core/Infra/AuthenticatedAccount/AuthenticatedAccount";

export interface IAuthService{

  // GetToken():string;
  
  // SaveToken(token: string):void;

  LogIn(logInRequest: LogInRequest): Promise<AuthenticatedAccount>;
  
  Register(registerRequest: RegistrationRequest): Promise<AuthenticatedAccount>;

  
}