import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    federation({
      name: 'dashboard-app',
      filename: 'dashboardEntry.js',
      exposes: {
        './LineChart': './src/exports/LineChart',
      },
      shared: {
        "highcharts-react-official": { singleton: true, eager: true, requiredVersion: "^3.2.1" },
        highcharts: { singleton: true, eager: true, requiredVersion: "^10.0.0" },
        react: { singleton: true, eager: true, requiredVersion: "^19.0.0" },
        "react-dom": { singleton: true, eager: true, requiredVersion: "^19.0.0" },
      },
    }),

  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});