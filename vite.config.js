import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import saveResultsPlugin from './vite-plugin-save-results.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), saveResultsPlugin()],
  server: {
    port: 3000,
    open: true
  }
})
