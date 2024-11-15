import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // api: "modern-compiler",
        silenceDeprecations: ["legacy-js-api"],
        additionalData: `
        @use "./src/assets/styles/abstracts/_colors.scss" as *;
        `,
      },
    },
  },
});
