import { useToolboxViewModel } from "./Toolbox/ToolboxViewModel";
import { ref } from "vue";
import { defineStore } from "pinia";
import type { ToolboxMenuItemConfig } from "./Toolbox/ToolboxMenuItemConfig";

export const useAppState = defineStore("AppState", () => {
  
  //=== General ==========================================//
  const IsLoading = ref(true);
  const IsScrolled = ref(false);

  //=== Toolbox ==========================================//
  const Toolbox$ = useToolboxViewModel();
  const UpdateToolbox = (update: ToolboxMenuItemConfig) => Toolbox$.Update(update);
  
  return {
    Toolbox$,
    UpdateToolbox,
    IsLoading,
    IsScrolled
    
  };
});
