import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://yoelvalverde.dev",
  compressHTML: true,
  devToolbar: {
    enabled: false
  },
  vite: {
    server: {
      watch: {
        usePolling: true
      },
    },
    plugins: [tailwindcss()],
  }
})
