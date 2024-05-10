import type { AuthCredentials } from "@/Core/Infra/Auth/AuthCredentials";
import type { IAuthClient } from "@/Core/Interfaces/IAuthClient";
import { defineStore } from "pinia";
import { GetTokenRequest } from "./GetToken/GetTokenRequest";

interface State{
  TryGetToken: (userName: string, password: string) => Promise<AuthCredentials>;
}

export const useAuthState = defineStore( "AuthState", ():State => {

  console.log("useAuthState.defineStore");
  
  const _client = {} as IAuthClient;

  const TryGetToken = async (userName: string, password: string): Promise<AuthCredentials> =>{
    
    console.log(`useAuthState.GetAuthData: ${userName}, ${password}`);

    // const request = new GetTokenRequest(userName, password);
    const result = _client.TryGetToken(userName, password);

    return await result;
  };  
  
  return {
    TryGetToken
  };

});

export default useAuthState;
export type useAuthState = Omit<
  ReturnType<typeof useAuthState>,
  keyof ReturnType<typeof defineStore>
>