import { RefreshTokenHandler } from "./../../Core/Features/Auth/Tokens/Refresh/RefreshTokenHandler";
import { GetNewTokenHandler } from "./../../Core/Features/Auth/Tokens/GetNew/GetNewTokenHandler";
import { GetDocumentNamesHandler } from "@/Core/Features/Cruds/GetDocumentNames/GetDocumentNamesHandler";
import { CrudClient } from "@/Data/InternalApis/CrudClient";

import { AuthService } from "@/Core/Features/Auth/AuthService";
import { LogInHandler } from "@/Core/Features/Auth/LogIn/LogInHandler";
import { RegistrationHandler } from "@/Core/Features/Auth/Register/RegistrationHandler";
import { AuthClient } from "@/Data/InternalApis/AuthClient";
import { CrudService } from "@/Core/Features/Cruds/CrudService";


const ProvideAuthService =()=> {
  console.log("DependencyFactory.ProvideAuthService()");
  
  // Data dependencies
  console.log("DependencyFactory.ProvideAuthService(): new AuthClient()");
  const authClient = new AuthClient();

  // Core dependencies
  console.log("DependencyFactory.ProvideAuthService(): new LogInHandler(authClient)");
  const logInHandler = new LogInHandler(authClient);
  const registrationHandler = new RegistrationHandler(authClient);
  const getNewTokenHandler  = new GetNewTokenHandler(authClient);
  const refreshTokenHandler = new RefreshTokenHandler(authClient);
  
  return new AuthService({
    logInHandler,
    registrationHandler,
    getNewTokenHandler,
    refreshTokenHandler
  });

};

const ProvideCrudService =()=> {
  console.log("DependencyFactory.ProvideCrudService()");
  
  // Data dependencies
  console.log("DependencyFactory.ProvideCrudService(): new CrudClient()");
  const crudClient = new CrudClient();

  // Core dependencies
  console.log("DependencyFactory.ProvideCrudService(): new GetDocumentNamesHandler(crudClient)");
  const getDocumentNamesHandler = new GetDocumentNamesHandler(crudClient);
  
  return new CrudService({
    getDocumentNamesHandler: getDocumentNamesHandler
  });

};

export const DependencyFactory = {
  ProvideAuthService,
  ProvideCrudService
};
