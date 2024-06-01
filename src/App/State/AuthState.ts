import { ref } from "vue";
import { defineStore } from "pinia";
import type {AuthenticatedAccount} from "@/Core/Infra/AuthenticatedAccount/AuthenticatedAccount.ts";

export const useAuthState = defineStore("AuthState", () => {  
  // const IsLoading = ref(true);  
  const AuthenticatedAccount = ref({} as AuthenticatedAccount);
    
  return {
    AuthenticatedAccount
    
  };
});
