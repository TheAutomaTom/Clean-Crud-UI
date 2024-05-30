import { useToolboxViewModel } from "./Toolbox/ToolboxViewModel";
import { ref } from "vue";
import { defineStore } from "pinia";
import type { ToolboxMenuItemConfig } from "./Toolbox/ToolboxMenuItemConfig";

export const useAppState = defineStore("AppState", () => {
  
  //=== General ==========================================//
  const IsLoading = ref(true);
  const IsScrolled = ref(false);

  //=== Toolbox ==========================================//
  const ToolboxVM = useToolboxViewModel();
  const UpdateToolbox = (update: ToolboxMenuItemConfig) => ToolboxVM.Update(update);
  
  return {
    ToolboxVM,
    UpdateToolbox,
    IsLoading,
    IsScrolled
    
  };
});
