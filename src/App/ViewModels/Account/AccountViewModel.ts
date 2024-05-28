import type { AccessToken } from "@/Core/Infra/AuthenticatedAccount/AccessToken";
import type { IAccountService } from "@/App/Interfaces/IAccountService";
import type { User } from "@/Core/Infra/AuthenticatedAccount/User";
import { DependencyFactory } from "@/App/Config/DependencyFactory";
import { LogInRequest } from "@/Core/Features/Accounts/LogIn/LogInRequest";
import { RegistrationRequest } from "@/Core/Features/Accounts/Register/RegistrationRequest";
import { defineStore } from "pinia";
import { ref } from "vue";

const _accountService: IAccountService = DependencyFactory.ProvideAccountService();

export const useAccountViewModel = defineStore("AccountViewModel", () => {

  const IsLoggedIn = ref(false);
  const User = ref({} as User);
  const Token = ref({} as AccessToken);
  
  const LogIn = async (username: string, passAttempt: string) => {
    const logInRequest = new LogInRequest(username, passAttempt);
    const attempt = await _accountService.LogIn(logInRequest);

    if(attempt != null){
      console.log("AccountViewModel.LogIn: attempt...");
      console.dir(attempt);
      User.value = attempt.User;
      Token.value = attempt.Credential.accessToken;
      IsLoggedIn.value = true;
      console.log(`AccountViewModel.IsLoggedIn: ${IsLoggedIn.value}...`);
    }
  };

  const Register = async (    
    username: string,
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => {
    const registrationRequest = new RegistrationRequest(
      username, 
      email,
      password,
      firstName, 
      lastName 
    );
    const attempt = await _accountService.Register(registrationRequest);

    if(attempt != null){
      User.value = attempt.User;
      Token.value = attempt.Credential.accessToken;
    }
  };

  return {
    IsLoggedIn,
    LogIn,
    Register,
    User,
    Token
  };

});
