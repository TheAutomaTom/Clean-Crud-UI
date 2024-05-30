import { ref } from "vue";
import { defineStore } from "pinia";

export const useDocumentSelectorViewModel = defineStore("DocumentSelectorViewModel", () => {
  
  const DocumentNames = ref({} as string[]);

  const GetNames = (page: number) =>{
    
  };

  return {
  
  };
  
});
