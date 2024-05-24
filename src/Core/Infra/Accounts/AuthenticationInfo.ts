// import type { User } from "./AuthenticationInfo/User";
import type { TokenInfo } from "./AuthenticationInfo/TokenInfo";

export class AuthenticationInfo {
  // User: User;
  TokenInfo: TokenInfo;

  constructor(
    // user: User,
    tokenInfo: TokenInfo
  ) {
    // this.User= user;
    this.TokenInfo= tokenInfo;

  }
}
