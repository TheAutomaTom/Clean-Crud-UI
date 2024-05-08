import { AuthCredentials } from "@/Core/Infra/AuthCredentials";
import type { IAuthClient } from "@/Core/Interfaces/IAuthClient";

export class AuthClient implements IAuthClient{
  _authUrl: string;
  _apiUrl  = import.meta.env.VITE_API_URL;
  constructor() {
    this._authUrl = import.meta.env.VITE_API_URL;
    this._authUrl.replace(/^{ENV}/, import.meta.env.VITE_AUTH_ENV);
    this._authUrl.replace(/^{PORT}/, import.meta.env.VITE_AUTH_URL_PORT);
    this._authUrl.replace(/^{REALM}/, import.meta.env.VITE_AUTH_URL_REALM);

    console.log(`Auth Url: ${this._authUrl}`);    
  }

  async TryGetToken(name: string, pass: string): Promise<AuthCredentials>{

    const data = new URLSearchParams();
    data.append("username", name);
    data.append("passwords", pass);
    data.append("grant_type", "password");
    data.append("client_id", import.meta.env.VITE_AUTH_CLIENT_NAME);
    data.append("client_secret", import.meta.env.VITE_AUTH_CLIENT_KEY);
    
    try{  
      const response = await fetch(this._authUrl, {
        method: "POST",
        body: data
      });

      if(response.ok){
        const body = await response.json();
        console.log(body);
  
        return new AuthCredentials(body);
      }
    } 
    catch (ex)
    {
      console.error(ex);
    }
    return new AuthCredentials("");
  }
  
}