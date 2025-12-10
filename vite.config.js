import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // Removed saveResultsPlugin
  base: './', // Helps with relative paths on GitLab Pages
  server: {
    port: 3000,
    open: true
  }
})