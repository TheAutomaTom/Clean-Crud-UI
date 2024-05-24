import type { LogInRequest } from "@/Core/Features/Accounts/LogIn/LogInRequest";
import type { RegistrationRequest } from "@/Core/Features/Accounts/Register/RegistrationRequest";

export interface IAccountService{

  LogIn(logInRequest: LogInRequest): void;  
  
  Register(registerRequest: RegistrationRequest): void;

}