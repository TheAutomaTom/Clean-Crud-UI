import { ref } from "vue";
import { defineStore } from "pinia";

export const useAppState = defineStore("AppState", () => {

  const IsLoading = ref(true);
  const IsScrolled = ref(false);
  return {
    IsLoading,
    IsScrolled
  };
});
