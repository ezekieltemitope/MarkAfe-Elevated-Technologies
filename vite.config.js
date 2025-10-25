import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/MarkAfe-Elevated-Technologies/', // <-- your repo name
  plugins: [
    react(),
    tailwindcss(),
  ],
})
