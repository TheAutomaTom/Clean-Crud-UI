import { ref } from "vue";
import { defineStore } from "pinia";

export const useToolboxState = defineStore("ToolboxState", () => {

  const IsOpen = ref(true);
  const SelectedView = ref("EditorView");

  return {
    IsOpen,
    SelectedView

  };
  
});
