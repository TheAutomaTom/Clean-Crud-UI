import type { AuthCredentials } from "../Infra/AuthCredentials";

export interface IAuthClient{
  TryGetToken(name: string, pass: string): Promise<AuthCredentials>;

}