import { ref } from "vue";
import { defineStore } from "pinia";
import type { AccountModel } from "./AccountState/AccountModel";
import type { IAuthClient } from "@/Core/Interfaces/IAuthClient";
import { isConstructorDeclaration } from "typescript";

export const useAccountState = defineStore("AccountState", () => {
  const _client = {} as IAuthClient;

  
  //=== General ==========================================//
  const IsLoading = ref(true);
  const CurrentAccount = ref({} as AccountModel);

  const TryLogIn = (user: string, pass: string) =>{
    
    console.log(`AccountState.TryLogOn Start: ${user}/ ${pass}`);
    const response = _client.TryGetToken(user, pass);
    console.log(`AccountState.TryLogOn End: ${response}`);

  };

  //=== Log in ==========================================//
  
  // const UpdateToolbox = (update: ToolboxMenuItemConfig) => Toolbox$.Update(update);
  
  return {
    IsLoading,
    CurrentAccount,
    TryLogIn
    
  };
});
