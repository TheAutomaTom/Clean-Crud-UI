import { defineStore } from "pinia";
import { AccountModel } from "./AccountModel";
import { DependencyInjector } from "@/App/Config/DependencyFactory";
import type { AuthService } from "@/Core/Features/Auth/AuthService";
import { TryLogInRequest as AccountLogInRequest } from "@/Core/Features/Auth/TryLogIn/TryLogInRequest";
import type { AuthCredentials } from "@/Core/Infra/Auth/AuthCredentials";
import { AccountDetail } from "./AccountDetail";

const _authService: AuthService = DependencyInjector.ProvideAuthService();

export const useAccountViewModel = defineStore("AccountViewModel", () => {
  
  //=== General ==========================================//  
  AccountDetail;
  
  //=== Credentials =====================================//
  const TryLogIn = async (username: string, passAttempt: string): Promise<AuthCredentials>=> {
    
    const accountLogInRequest = new AccountLogInRequest(username, passAttempt);
    const attempt = await _authService.tryLogIn(accountLogInRequest);

    if(attempt != null){
      accountDetail = new AccountDetail(


      );
    }





  };


  return {
    TryLogIn
    
  };
});
