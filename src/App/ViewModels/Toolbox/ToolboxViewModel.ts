import { ref } from "vue";
import { defineStore } from "pinia";
import type { ToolboxMenuItemConfig } from "./ToolboxMenuItemConfig";
import { ToolboxType } from "../../../Core/Infra/Common/Messaging/ToolboxType";

export const useToolboxViewModel = defineStore("ToolboxViewModel", () => {
  
  const IsOpen = ref(true);
  const ActiveToolbox = ref(ToolboxType.Account); 

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
    ActiveToolbox,
    IsOpen,
    Update

  };
  
});
