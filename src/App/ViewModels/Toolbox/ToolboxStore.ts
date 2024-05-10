import { ref } from "vue";
import { defineStore } from "pinia";
import type { ToolboxMenuItemConfig } from "./ToolboxMenuItemConfig";
import { UpdateRequester } from "../../../Core/Infra/Common/Messaging/UpdateRequester";

export const useToolboxStore = defineStore("ToolboxStore", () => {
  
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