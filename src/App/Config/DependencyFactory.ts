import { AccountService } from "@/Core/Features/Accounts/AccountService";
import { LogInHandler } from "@/Core/Features/Accounts/LogIn/LogInHandler";
import { RegistrationHandler } from "@/Core/Features/Accounts/Register/RegistrationHandler";
import { AccountClient } from "@/Data/Accounts/AccountClient";

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

export const DependencyFactory = {
  ProvideAccountService
};
