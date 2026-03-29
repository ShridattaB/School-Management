// vite mostly handles the development server
// this file cotrols how the vite app runs and where it runs, it includes plugins for react, server port settings.
// config is normally the settings and the bunch of rules for the app, how should app run

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
})
