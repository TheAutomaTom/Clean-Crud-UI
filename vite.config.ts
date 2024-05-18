import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import VueDevTools from "vite-plugin-vue-devtools";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
    // VueDevTools()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@App": fileURLToPath(new URL("./src/App", import.meta.url)),
      "@Layout": fileURLToPath(new URL("./src/App/Layouts", import.meta.url)),
      "@ViewModels": fileURLToPath(new URL("./src/App/ViewModels", import.meta.url)),
      "@Views": fileURLToPath(new URL("./src/App/Views", import.meta.url)),
      "@Data": fileURLToPath(new URL("./src/Data", import.meta.url))
    }
  }
});
