import type { AuthenticatedAccount } from "@/Core/Infra/AuthenticatedAccount/AuthenticatedAccount";
import type { IAuthClient as IAccountClient } from "@/Core/Interfaces/IAuthClient";
import { ConvertToPascalObjectKey } from "../ClientUtilities";
import type { GetNewTokenRequest } from "@/Core/Features/Auth/Tokens/GetNew/GetNewTokenRequest";
import type { RefreshTokenRequest } from "@/Core/Features/Auth/Tokens/Refresh/RefreshTokenRequest";
import type { Token } from "@/Core/Infra/AuthenticatedAccount/AccessTokens";

export class AuthClient implements IAccountClient{
  
  apiUrl: string;
  apiKey  = import.meta.env.VITE_API_KEY;
  
  constructor() {
        this.apiUrl = import.meta.env.VITE_API_URL
                        .replace("{ADDRESS}", import.meta.env.VITE_API_ADDRESS)
                        .replace("{PORT}", import.meta.env.VITE_API_PORT)
                        .replace("{VERSION}", import.meta.env.VITE_API_VERSION);
  }
  GetNewToken(request: GetNewTokenRequest): Promise<Token> {
    throw new Error("Method not implemented.");
  }
  RefreshToken(request: RefreshTokenRequest): Promise<Token> {
    throw new Error("Method not implemented.");
  }

  async LogIn(username: string, password: string): Promise<AuthenticatedAccount> {
    console.log(`AccountClient.LogIn: username: ${username}, password: ${password}.`);
    

    
    const res = await fetch(`${this.apiUrl}/accounts/log-in`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json", 
        // TODO: implement on backend
        "x-api-key": this.apiKey 
      },
      body: JSON.stringify({
        username, 
        password
      })
    });

    console.log(`AccountClient.LogIn: Response.ok? ${res.ok}.`); 
    if (res.ok) {
      
      const asPascalCase = ConvertToPascalObjectKey(await res.json());
      return (asPascalCase) as AuthenticatedAccount;

    } else {
      throw Error(res.statusText);
    }
    

  }

  async RegisterNewAccount(
    username: string, 
    firstName: string, 
    lastName: string, 
    email: string, 
    password: string
  ): Promise<AuthenticatedAccount> {

    const res = await fetch(`${this.apiUrl}/accounts/register`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json", 
        // TODO: implement on backend
        "x-api-key": this.apiKey 
      },
      body: JSON.stringify({
        username,
        password,
        email,
        firstName,
        lastName,
        role: "Registered"
      })
    });

    if (res.ok) {
      console.log(`AccountClient.Register: ${res}`);
      console.dir(res);

      const asPascalCase = ConvertToPascalObjectKey(await res.json());
      return (asPascalCase) as AuthenticatedAccount;
      
    } else {
      throw Error(res.statusText);
    }
    
  }



}
