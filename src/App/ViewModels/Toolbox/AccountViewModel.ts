import type { User } from "@/Core/Infra/AuthenticatedAccount/User";
import { DependencyFactory } from "@/App/Config/DependencyFactory";
import { LogInRequest } from "@/Core/Features/Auth/LogIn/LogInRequest";
import { RegistrationRequest } from "@/Core/Features/Auth/Register/RegistrationRequest";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useAuthState } from "@/App/State/AuthState";
import type { IAuthService } from "@/App/Interfaces/IAuthService";


const _service: IAuthService = DependencyFactory.ProvideAuthService();

export const useAccountViewModel = defineStore("AccountViewModel", () => {

  const AuthState = useAuthState();

  const IsLoggedIn = ref(false);
  const User = ref({} as User);
  
  const LogIn = async (username: string, passAttempt: string) => {
    const logInRequest = new LogInRequest(username, passAttempt);
    const attempt = await _service.LogIn(logInRequest);

    if(attempt != null){
      console.log("AccountViewModel.LogIn: attempt...");
      console.dir(attempt);
      User.value = attempt.User;
      // AuthState.  xxxxxxxxxxxxxxxxxxxxx= attempt.Credential.accessTokens;
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
    const attempt = await _service.Register(registrationRequest);

    if(attempt != null){
      console.log("AccountViewModel.Register: attempt...");
      console.dir(attempt);
      User.value = attempt.User;
      // AuthState.Token = attempt.Credential.accessTokens;
      IsLoggedIn.value = true;
      console.log(`AccountViewModel.IsLoggedIn: ${IsLoggedIn.value}...`);
    }
  };

  return {
    IsLoggedIn,
    LogIn,
    Register,
    User
  };

});
