import { TokenInfo } from "@/Core/Infra/Accounts/AuthenticationInfo/TokenInfo";
import { AuthenticationInfo } from "@/Core/Infra/Accounts/AuthenticationInfo";
import { defineStore } from "pinia";

export interface IAccountServiceState{
  SaveToken:(token: string)=> void;
  GetSavedToken:()=> string|null;
}

export const useAccountServiceState = defineStore( "AccountServiceState", ():IAccountServiceState => {
  console.log("useAccountServiceState.defineStore");

  let _authInfo : AuthenticationInfo;

  const SaveToken =(token: string)=> {    
    if(_authInfo == null){
      _authInfo = new AuthenticationInfo(
        // new User(), 
        new TokenInfo(token)
      );
      return;
    }
    _authInfo.TokenInfo = new TokenInfo(token);
  };
  
  const GetSavedToken =()=> _authInfo.TokenInfo.TryGetValidToken();
  
  return {
    SaveToken,
    GetSavedToken
  };

});

export default useAccountServiceState;
export type useAuthServiceState = 
  Omit<
    ReturnType<typeof useAccountServiceState>,
    keyof ReturnType<typeof defineStore>
  >
