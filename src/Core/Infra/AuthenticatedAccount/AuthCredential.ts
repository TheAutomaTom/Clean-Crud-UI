import type { AccessToken } from "./AccessToken";

export type AuthCredential = {
  accessToken: AccessToken;
  authUserId: string;
  roles: string[];
}
