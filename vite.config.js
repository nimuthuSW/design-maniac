import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set base to the repository name so assets resolve correctly on GitHub Pages
// (https://<user>.github.io/<repo>/). Change 'design-maniac' if you rename the repo.
export default defineConfig({
  plugins: [react()],
  base: '/design-maniac/',
})
