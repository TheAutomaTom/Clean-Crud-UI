import type { ICrudTokenClient } from "@/Core/Interfaces/ICrudTokenClient";
import { ConvertToPascalObjectKey } from "../ClientUtilities";

export class CrudTokenClient implements ICrudTokenClient{
  
  apiUrl: string;
  clientId  = import.meta.env.VITE_AUTH_CLIENT_ID;
  secret  = import.meta.env.VITE_AUTH_CLIENT_SECRET;
  
  constructor() {
    this.apiUrl = import.meta.env.VITE_AUTH_REFRESH_URL
      .replace("{ADDRESS}", import.meta.env.VITE_AUTH_ADDRESS)
      .replace("{PORT}", import.meta.env.VITE_AUTH_PORT)
      .replace("{REALM}", import.meta.env.VITE_AUTH_REALM);
  }

  async RefreshToken(token: string): Promise<string> {
    console.log("CrudTokenClient.RefreshToken.");

    const formData = new FormData();
    formData.append("client_id", this.clientId);
    formData.append("client_secret", this.secret);
    formData.append("grant_type", "refresh_token");
    formData.append("refresh_token", token);

    const res = await fetch(this.apiUrl,
    {
      method: "POST",
      mode: "cors",
      body: formData
    });

    console.log(`CrudTokenClient.RefreshToken: Response.ok? ${res.ok}.`); 
    if (res.ok) {      
      const refreshed = await res.json() as { refresh_token: string };
      console.log(`CrudTokenClient.RefreshToken: refresh_token? ${refreshed.refresh_token}.`);
      return refreshed.refresh_token;

    } else {
      throw Error(res.statusText);
    }
    

  }




}
