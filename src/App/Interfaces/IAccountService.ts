import type { LogInRequest } from "@/Core/Features/Accounts/LogIn/LogInRequest";
import type { LogInResult } from "@/Core/Features/Accounts/LogIn/LogInResult";
import type { RegistrationRequest } from "@/Core/Features/Accounts/Register/RegistrationRequest";
import type { RegistrationResult } from "@/Core/Features/Accounts/Register/RegistrationResult";

export interface IAccountService{

  GetSavedToken():string;
  
  SaveToken(token: string):void;

  LogIn(logInRequest: LogInRequest): Promise<LogInResult>;
  
  Register(registerRequest: RegistrationRequest): Promise<RegistrationResult>;

}