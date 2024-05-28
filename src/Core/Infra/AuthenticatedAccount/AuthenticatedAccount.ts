import type { AuthCredential } from "./AuthCredential";
import type { User } from "./User";

export type AuthenticatedAccount = {
  Credential: AuthCredential;
  User: User;

}