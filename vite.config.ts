import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-Tsconfig-Paths' 

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), viteTsconfigPaths()],
})
