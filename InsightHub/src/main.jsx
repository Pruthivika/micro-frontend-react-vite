import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider as UIProvider } from "@/components/ui/provider"
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <UIProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UIProvider>
    </ReduxProvider>
  </StrictMode>,
)
