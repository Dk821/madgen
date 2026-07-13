import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['donita-nonbillable-kayden.ngrok-free.dev'],
  },
})
