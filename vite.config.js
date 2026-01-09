// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { getPlugin } from "rollup-plugin-polyfill-utils";

export default defineConfig({
  plugins: [
    react(),
    getPlugin()
  ],
  publicDir: "public",
  base: "/",
  server: {
    // Configure server to handle MediaPipe WASM files
    headers: {
      "Cross-Origin-Embedder-Policy": "require-corp",
      "Cross-Origin-Opener-Policy": "same-origin",
    },
    hmr: {
      host: "localhost",
    },
  },
});
