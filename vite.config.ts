import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Exportamos la configuración con los tipos adecuados para Vitest
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
});
