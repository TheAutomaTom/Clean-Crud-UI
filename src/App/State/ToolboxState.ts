import { ref } from "vue";
import { defineStore } from "pinia";
import type { ToolboxMenuItemConfig } from "./ToolboxState/ToolboxMenuItemConfig";
import { UpdateRequester } from "./Models/UpdateRequester";

export const useToolboxState = defineStore("ToolboxState", () => {
  
  const IsOpen = ref(true);
  const ActiveToolbox = ref(UpdateRequester.Account);

  const Update = (update: ToolboxMenuItemConfig) =>{
    if (ActiveToolbox.value == update.requester){
      IsOpen.value = !IsOpen.value;
      return;
    } else {
      ActiveToolbox.value = update.requester;
      IsOpen.value = true;
      return;
    }
  };
  
  return {
    Update,
    IsOpen

  };
  
});
