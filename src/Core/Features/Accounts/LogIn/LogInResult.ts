/// This class can be used to create AuthCredentials and an AccountDetail
import type { AccountInfo } from "@/Core/Infra/Accounts/AccountInfo/AccountInfo";
import type { AuthenticationInfo } from "@/Core/Infra/Accounts/AuthenticationInfo/AuthenticationInfo";
export class LogInResult{
  AuthenticationInfo: AuthenticationInfo;
  AccountInfo: AccountInfo;
  
  constructor(
    authenticationInfo: AuthenticationInfo,
    accountInfo: AccountInfo
  ) {
    this.AuthenticationInfo = authenticationInfo;
    this.AccountInfo = accountInfo;
  }


}
