import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/ReactPortFolio/", // IMPORTANT: Use only the repo name with slashes
});


