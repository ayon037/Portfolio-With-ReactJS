import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
  };
  
  if (command !== 'serve') {
    config.base = '/Portfolio-With-ReactJS/';
  }
  
  return config;
});
