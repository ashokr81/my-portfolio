import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// GitHub Pages serves this repo at https://ashokr81.github.io/my-portfolio/
export default defineConfig({
  base: process.env.GITHUB_PAGES ? '/my-portfolio/' : '/',
  plugins: [tailwindcss(), react()],
})
