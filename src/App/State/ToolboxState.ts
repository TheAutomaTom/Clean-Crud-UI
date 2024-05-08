import { ref } from "vue";
import { defineStore } from "pinia";
import type { ToolboxMenuItemConfig } from "./Models/ToolboxMenuItemConfig";

export const useToolboxState = defineStore("ToolboxState", () => {
  
  const IsOpen = ref(true);
  const ActiveToolbox = ref("EditorView");

  const Update = (update: ToolboxMenuItemConfig) =>{
    console.log(`ToolboxState received ${update.update}`);
    if (ActiveToolbox.value == update.update){
      IsOpen.value = !IsOpen.value;
      console.log(`ActiveToolbox.value(${ActiveToolbox.value}) == ${update.update}`);
      return;
    } else {
      console.log(`ActiveToolbox.value(${ActiveToolbox.value}) != ${update.update}`);
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
