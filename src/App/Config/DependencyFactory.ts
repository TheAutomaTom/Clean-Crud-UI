import { GetNamesHandler } from "@/Core/Features/Cruds/GetNames/GetNamesHandler";
import { CrudClient } from "@/Data/InternalApis/CrudClient";

import { AccountService } from "@/Core/Features/Accounts/AccountService";
import { LogInHandler } from "@/Core/Features/Accounts/LogIn/LogInHandler";
import { RegistrationHandler } from "@/Core/Features/Accounts/Register/RegistrationHandler";
import { AccountClient } from "@/Data/InternalApis/AccountClient";
import { CrudService } from "@/Core/Features/Cruds/CrudService";

const ProvideAccountService =()=> {
  console.log("DependencyFactory.ProvideAccountService()");
  
  // Data dependencies
  console.log("DependencyFactory.ProvideAccountService(): new AccountClient()");
  const accountClient = new AccountClient();

  // Core dependencies
  console.log("DependencyFactory.ProvideAccountService(): new LogInHandler(accountClient)");
  const logInHandler = new LogInHandler(accountClient);
  const registrationHandler = new RegistrationHandler(accountClient);
  
  return new AccountService({
    logInHandler,
    registrationHandler
  });

};

const ProvideCrudService =()=> {
  console.log("DependencyFactory.ProvideCrudService()");
  
  // Data dependencies
  console.log("DependencyFactory.ProvideCrudService(): new CrudClient()");
  const crudClient = new CrudClient();

  // Core dependencies
  console.log("DependencyFactory.ProvideCrudService(): new GetNamesHandler(crudClient)");
  const getNamesHandler = new GetNamesHandler(crudClient);
  
  return new CrudService({
    getNamesHandler
  });

};

export const DependencyFactory = {
  ProvideAccountService,
  ProvideCrudService
};
