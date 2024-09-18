import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5000,
    proxy: {'/api':'http://localhost:3000'}
  },
  plugins: [react()],
})
