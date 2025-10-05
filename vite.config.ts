import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@/types": path.resolve(__dirname, "src/types"),
      images: path.resolve(__dirname, "src/assets/images"),
    },
  },
});
