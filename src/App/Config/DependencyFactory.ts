import { AuthClient } from "@/Data/Auth/AuthClient";
import { GetTokenHandler } from "@/Core/Features/Auth/TryLogIn/GetCredentialsHandler";
import { AuthService } from "@/Core/Features/Auth/AuthService";
import useAuthServiceState from "@/Core/Features/Auth/AuthServiceState";

const ProvideAuthService =()=> {
  
  // Data dependencies
  const authClient = new AuthClient();

  // Core dependencies
  const authServiceState = useAuthServiceState();
  const getTokenHandler = new GetTokenHandler(authClient);
  
  return new AuthService({
    authServiceState,
    getTokenHandler
  });

};

export const DependencyInjector = {
  ProvideAuthService
};