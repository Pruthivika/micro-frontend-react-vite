import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    federation({
      name: 'log-app',
      filename: 'logEntry.js',
      exposes: {
        './LogList': './src/exports/LogList',
      },
      shared: ["react", "react-dom", "react-redux", "redux-saga", "@reduxjs/toolkit", "@chakra-ui/react"],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});