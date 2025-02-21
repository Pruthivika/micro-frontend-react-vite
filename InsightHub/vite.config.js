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
    exposes: {
      "./store": "./src/store",
    },
    shared: ["highcharts-react-official", "highcharts", "react", "react-dom", "react-redux", "redux-saga", "@reduxjs/toolkit", "@chakra-ui/react"],
  }),

  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
})
