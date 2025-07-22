import { defineConfig } from 'vite';
import { resolve } from 'path';
import { readdirSync } from 'fs';

// Get all HTML files in the root directory
const htmlFiles = readdirSync(__dirname)
  .filter((file) => file.endsWith('.html'))
  .reduce((acc, file) => {
    const name = file.split('.')[0];
    acc[name] = resolve(__dirname, file);
    return acc;
  }, {});

export default defineConfig({
  server: {
    port: 5173,
    open: true
  },
  build: {
    rollupOptions: {
      input: htmlFiles,
    },
    outDir: 'dist',
  },
});