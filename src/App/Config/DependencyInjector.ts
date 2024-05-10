import { AuthClient } from "@/Data/Auth/AuthClient";
import { GetTokenHandler } from "@/Core/Features/Auth/GetToken/GetTokenHandler";
import { AuthService } from "@/Core/Features/Auth/AuthService";
import type AuthState from "@/Core/Features/Auth/AuthState";

const ProvideAuthServices = (store: AuthState ) =>{
  
  // Data dependencies
  const authClient = new AuthClient();

  // Core dependencies
  const getTokenHandler = new GetTokenHandler(authClient);

  
  return new AuthService({
    store,
    getTokenHandler
  });

};

export const DependencyInjector = {
  ProvideAuthServices
};