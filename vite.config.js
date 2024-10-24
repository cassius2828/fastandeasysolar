import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: "./bundle-visualizer.html",
      open: true,
    }),
  ],
  build: {
    rollupOptions: {},
  },
  server: {
    hmr: {
      overlay: true,
    },
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
});
