import type { GetNewTokenRequest } from "../Features/Auth/Tokens/GetNew/GetNewTokenRequest";
import type { RefreshTokenRequest } from "../Features/Auth/Tokens/Refresh/RefreshTokenRequest";
import type { Token } from "../Infra/AuthenticatedAccount/AccessTokens";
import type { AuthenticatedAccount } from "../Infra/AuthenticatedAccount/AuthenticatedAccount";

export interface IAuthClient{

  GetNewToken(request: GetNewTokenRequest):Promise<Token>
  
  RefreshToken(request: RefreshTokenRequest):Promise<Token>

  LogIn(name: string, pass: string): Promise<AuthenticatedAccount>;
  
  RegisterNewAccount(
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ): Promise<AuthenticatedAccount>;


}