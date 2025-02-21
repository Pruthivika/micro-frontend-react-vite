import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths"
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [react(), tsconfigPaths(),
  federation({
    name: 'app',
    remotes: {
      dashboardApp: 'http://localhost:5001/assets/dashboardEntry.js',
      logApp: 'http://localhost:5002/assets/logEntry.js'
    },
    shared: {
      react: { singleton: true, eager: true, requiredVersion: "^19.0.0" },
      "react-dom": { singleton: true, eager: true, requiredVersion: "^19.0.0" },
      "highcharts-react-official": { singleton: true, eager: true, requiredVersion: "^3.2.1" },
      highcharts: { singleton: true, eager: true, requiredVersion: "^10.0.0" },
    },
  }),

  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
})
