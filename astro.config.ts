import { defineConfig } from "astro/config";

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
      }
    }
  }
})
