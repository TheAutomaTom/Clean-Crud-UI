import { useToolboxState } from "./ToolboxState";
import { ref } from "vue";
import { defineStore } from "pinia";

export const useAppState = defineStore("AppState", () => {
  
  //=== General ==========================================//
  const IsLoading = ref(true);
  const IsScrolled = ref(false);

  //=== Toolbox ==========================================//
  const toolbox$ = useToolboxState();
  const UpdateToolbox = (name: string) => {
    toolbox$.SelectedView = name;
    toolbox$.IsOpen = !toolbox$.IsOpen;
  };
  
  return {
    UpdateToolbox,
    IsLoading,
    IsScrolled
    
  };
});
