import type { AccountInfo } from "./AccountInfo/AccountInfo";
import type { AuthenticationInfo } from "./AuthenticationInfo/AuthenticationInfo";

export class RegistrationResponse {
  AuthenticationInfo: AuthenticationInfo;
  AccountInfo: AccountInfo;
  
  constructor(
    AuthenticationInfo: AuthenticationInfo,
    AccountInfo: AccountInfo    

  ) {
    this.AuthenticationInfo = AuthenticationInfo;
    this.AccountInfo = AccountInfo;
    
  }
}
