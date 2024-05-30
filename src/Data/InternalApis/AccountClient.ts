import type { AuthenticatedAccount } from "@/Core/Infra/AuthenticatedAccount/AuthenticatedAccount";
import type { IAccountsClient as IAccountClient } from "@/Core/Interfaces/IAccountClient";

export class AccountClient implements IAccountClient{
  
  apiUrl: string;
  apiKey  = import.meta.env.VITE_API_KEY;
  
  constructor() {
        this.apiUrl = import.meta.env.VITE_API_URL
                        .replace("{ADDRESS}", import.meta.env.VITE_API_ADDRESS)
                        .replace("{PORT}", import.meta.env.VITE_API_PORT)
                        .replace("{VERSION}", import.meta.env.VITE_API_VERSION);
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
      
      const asPascalCase = convertToPascalObjectKey(await res.json());
      return (asPascalCase) as AuthenticatedAccount;

    } else {
      throw Error(res.statusText);
    }
    

  }

  async RegisterNewAccount(username: string, firstName: string, lastName: string, email: string, password: string): Promise<AuthenticatedAccount> {

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

      const asPascalCase = convertToPascalObjectKey(await res.json());
      return (asPascalCase) as AuthenticatedAccount;
      
    } else {
      throw Error(res.statusText);
    }
    
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


  
const convertToPascalObjectKey = (obj: object) => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const pascalCaseKey = key.charAt(0).toUpperCase() + key.slice(1);
    return { ...acc, [pascalCaseKey]: value };
  }, {});
};
