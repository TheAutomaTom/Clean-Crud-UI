import type { AuthenticationInfo } from "@/Core/Infra/Accounts/AuthenticationInfo";

/// This class can be used to create AuthCredentials and an AccountDetail
export class RegistrationResult{
  AuthenticationInfo: AuthenticationInfo;
  // AccountInfo: AccountInfo;
  
  constructor(
    authenticationInfo: AuthenticationInfo
    // accountInfo: AccountInfo
  ) {
    this.AuthenticationInfo = authenticationInfo;
    // this.AccountInfo = accountInfo;
  }


}
