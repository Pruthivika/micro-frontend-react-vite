import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider as UIProvider } from "@/components/ui/provider"
import './index.css'
import App from './App.jsx'
import { Provider as ReduxProvider } from "react-redux";
import store from "container/store";
import ErrorBoundary from "./components/ErrorBoundary";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <UIProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </UIProvider>
    </ReduxProvider>
  </StrictMode>,
)
