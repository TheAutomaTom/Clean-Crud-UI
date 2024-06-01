import type { Token } from "./AccessTokens";

export type AuthCredential = {
  accessTokens: Token;
  authUserId: string;
  roles: string[];
}
