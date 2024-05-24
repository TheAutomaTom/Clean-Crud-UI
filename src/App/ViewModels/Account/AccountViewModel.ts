import { defineStore } from "pinia";
import { DependencyFactory } from "@/App/Config/DependencyFactory";
import { LogInRequest } from "@/Core/Features/Accounts/LogIn/LogInRequest";
import type { IAccountService } from "@/App/Interfaces/IAccountService";

const _authService: IAccountService = DependencyFactory.ProvideAccountService();

export const useAccountViewModel = defineStore("AccountViewModel", () => {

  const LogIn = async (username: string, passAttempt: string) => {
    const logInRequest = new LogInRequest(username, passAttempt);
    const attempt = await _authService.LogIn(logInRequest);

    if(attempt != null){
      //...
    }
  };

  const Register = async (
    // ...
  ) => { 
    // ...
  };

  return {
    LogIn,
    Register    
  };

});
