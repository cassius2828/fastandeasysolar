import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      // Set this to 'true' to ensure HMR is enabled
      overlay: true, // This ensures the error overlay is displayed in the browser on build errors
      // clientPort: 3000, // Optional: If running Vite behind a reverse proxy or on a different port
      // protocol: 'ws', // Optional: Specify 'ws' (WebSocket) or 'wss' (WebSocket Secure) if needed
    },
    watch: {
      // Watch settings if you need to fine-tune file watching
      usePolling: true, // This can help in environments where file changes are not detected
      interval: 100, // Polling interval in milliseconds
    },
  },
});
