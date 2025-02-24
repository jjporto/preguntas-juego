import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react()],
  base: './', // Esto ayuda a que se resuelvan las rutas correctamente
  build: {
    outDir: 'dist',
  }

});

