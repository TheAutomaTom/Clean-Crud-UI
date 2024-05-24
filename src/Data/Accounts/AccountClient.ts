import type { AuthenticationInfo } from "@/Core/Infra/Accounts/AuthenticationInfo";
import type { IAccountsClient as IAccountClient } from "@/Core/Interfaces/IAccountClient";


export class AccountClient implements IAccountClient{
  
  _authUrl: string;
  _apiUrl  = import.meta.env.VITE_API_URL;

  constructor() {
    this._authUrl = import.meta.env.VITE_API_URL;
    this._authUrl.replace(/^{ENV}/, import.meta.env.VITE_AUTH_ENV);
    this._authUrl.replace(/^{PORT}/, import.meta.env.VITE_AUTH_URL_PORT);
    this._authUrl.replace(/^{REALM}/, import.meta.env.VITE_AUTH_URL_REALM);

    console.log(`Accounts Url: ${this._authUrl}`); 
  }

  LogIn(name: string, pass: string): Promise<AuthenticationInfo> {
    throw new Error("Method not implemented.");
  }

  Register(username: string, firstName: string, lastName: string, email: string, password: string): Promise<AuthenticationInfo> {
    throw new Error("Method not implemented.");
  }

  /*
  async TryGetToken(name: string, pass: string): Promise<AuthenticationInfo>{

    const data = new URLSearchParams();
    data.append("grant_type", "password");
    data.append("client_id", import.meta.env.VITE_AUTH_CLIENT_NAME);
    data.append("client_secret", import.meta.env.VITE_AUTH_CLIENT_KEY);
    data.append("username", name);
    data.append("password", pass);
    
    try{  
      const response = await fetch(this._authUrl, {
        method: "POST",
        body: data
      });

      if(response.ok){
        const body = await response.json();
        console.log(body);
  
        return new AuthenticationInfo(body);
      }
    } 
    catch (ex)
    {
      console.error(ex);
    }
    return new AuthenticationInfo("");
  }
  */



  /*
  async RegisterAndLogIn(
    Username : string,
    FirstName : string,
    LastName : string,
    Email : string,
    Password : string,
    Role : string // TODO: Use enum
  ): Promise<AuthCredentials>{

    console.log(`RegisterAccount(
      ${firstName}, 
      ${lastName}, 
      ${email}, 
      ${pass})...
    `);

    const data = JSON.stringify({
      firstName,
      lastName,
      email,
      pass
    });
    
    try{  
      const response = await fetch(this._authUrl, {
        method: "POST",
        body: data
      });

      if(response.ok){
        const body = await response.json();
        console.log(body);
  
        return new TokenInfo(body);
      }
    } 
    catch (ex)
    {
      console.error(ex);
    }
    return new TokenInfo("");
  }
  */
  
}