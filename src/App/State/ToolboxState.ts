import { ref } from "vue";
import { defineStore } from "pinia";

export const useToolboxState = defineStore("ToolboxState", () => {

  const IsOpen = ref(false);
  const SelectedView = ref("EditorView");

  return {
    IsOpen,
    SelectedView

  };
  
});
