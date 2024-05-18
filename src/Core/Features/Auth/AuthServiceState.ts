import { AuthCredentials } from "@/Core/Infra/Auth/AuthCredentials";
import { defineStore } from "pinia";

interface state{
  SaveToken:(token: string)=> void;
  GetSavedToken:()=> string|null;
}

export const useAuthServiceState = defineStore( "AuthServiceState", ():state => {

  console.log("useAuthServiceState.defineStore");

  let _authCreds : AuthCredentials;

  const SaveToken =(token: string)=> _authCreds = new AuthCredentials(token);
  const GetSavedToken =()=> _authCreds.ValidToken();
  
  return {
    SaveToken,
    GetSavedToken
  };

});

export default useAuthServiceState;
export type useAuthServiceState = Omit<
  ReturnType<typeof useAuthServiceState>,
  keyof ReturnType<typeof defineStore>
>
