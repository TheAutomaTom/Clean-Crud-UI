import { ref } from "vue";
import { defineStore } from "pinia";
import { DependencyFactory } from "@/App/Config/DependencyFactory";
import type { ICrudService } from "@/App/Interfaces/ICrudService";

const _service: ICrudService = DependencyFactory.ProvideCrudService();

export const useDocumentSelectorViewModel = defineStore("DocumentSelectorViewModel", () => {
  
  const DocumentNames = ref({} as string[]);

  const GetNames = (page: number) =>{
    
  };

  return {
  
  };
  
});
