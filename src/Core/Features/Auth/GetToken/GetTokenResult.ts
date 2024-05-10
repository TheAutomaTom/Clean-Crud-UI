import type { AuthCredentials } from "@/Core/Infra/Auth/AuthCredentials";

export class GetTokenResult{
  AuthCredentials: AuthCredentials;
  
  constructor(credentials: AuthCredentials) {
    this.AuthCredentials = credentials;
    
  }
}