import type { IAccountService } from "@/App/Interfaces/IAccountService";
import { DependencyFactory } from "@/App/Config/DependencyFactory";
import { LogInRequest } from "@/Core/Features/Accounts/LogIn/LogInRequest";
import { defineStore } from "pinia";
import { ref } from "vue";

const _accountService: IAccountService = DependencyFactory.ProvideAccountService();

export const useAccountViewModel = defineStore("AccountViewModel", () => {


  const User = ref({
    Username:   "...", 
    Email:      "...",
    FirstName:  "...",
    LastName:   "..."

  });

  const Token = ref("...");
  
  const LogIn = async (username: string, passAttempt: string) => {
    const logInRequest = new LogInRequest(username, passAttempt);
    const attempt = await _accountService.LogIn(logInRequest);

    if(attempt != null){

      User.value.Username   = attempt.AccountInfo.AccountSpec.Username;
      User.value.Email      = attempt.AccountInfo.AccountSpec.Email;
      User.value.FirstName  = attempt.AccountInfo.AccountSpec.FirstName;
      User.value.LastName   = attempt.AccountInfo.AccountSpec.LastName;

      Token.value = attempt.AuthenticationInfo.TokenInfo.TryGetValidToken();
    }
  };




  const Register = async (
    // ...
  ) => { 
    // ...
  };

  return {
    LogIn,
    Register,
    User,
    Token
  };

});
