import { ref } from "vue";
import { defineStore } from "pinia";

export const useWebLinksViewModel = defineStore("WebLinksViewModel", () => {
  
  const HomePage = "https://github.com/TheAutomaTom";

  return {
    HomePage
  };
  
});
