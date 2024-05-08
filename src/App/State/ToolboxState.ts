import { ref } from "vue";
import { defineStore } from "pinia";
import type { ToolboxMenuItemConfig } from "./Models/ToolboxMenuItemConfig";

export const useToolboxState = defineStore("ToolboxState", () => {
  
  const IsOpen = ref(true);
  const ActiveToolbox = ref("EditorView");

  const Update = (update: ToolboxMenuItemConfig) =>{
    if (ActiveToolbox.value == update.update){
      IsOpen.value = !IsOpen.value;
      return;
    } else {
      ActiveToolbox.value = update.update;
      IsOpen.value = true;
      return;
    }
  };
  
  return {
    Update,
    IsOpen

  };
  
});
