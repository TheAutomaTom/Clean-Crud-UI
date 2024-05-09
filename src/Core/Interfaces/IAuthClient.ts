import type { AuthCredentials } from "../Infra/Auth/AuthCredentials";

export interface IAuthClient{
  TryGetToken(name: string, pass: string): Promise<AuthCredentials>;

}