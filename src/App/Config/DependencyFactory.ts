import { AccountService } from "@/Core/Features/Accounts/AccountService";
import { LogInHandler } from "@/Core/Features/Accounts/LogIn/LogInHandler";
import { AccountClient } from "@/Data/Accounts/AccountClient";

const ProvideAccountService =()=> {
  console.log("DependencyFactory.ProvideAccountService()");
  
  // Data dependencies
  console.log("DependencyFactory.ProvideAccountService(): new AccountClient()");
  const accountClient = new AccountClient();

  // Core dependencies
  console.log("DependencyFactory.ProvideAccountService(): new LogInHandler(accountClient)");
  const logInHandler = new LogInHandler(accountClient);
  
  return new AccountService({
    logInHandler: logInHandler
  });

};

export const DependencyFactory = {
  ProvideAccountService
};
