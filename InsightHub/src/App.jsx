import { lazy, Suspense } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { Spinner, Center } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import DefaultPage from "./pages/DefaultPage";
import './App.css'

const DashboardApp = lazy(() => import("./pages/DashboardPage"));
const LogApp = lazy(() => import("./pages/LogPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path=""
          element={
            <ErrorBoundary>
              <Suspense fallback={<Center><Spinner size="xl" /></Center>}>
                <DashboardApp />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path="log"
          element={
            <ErrorBoundary>
              <Suspense fallback={<Center><Spinner size="xl" /></Center>}>
                <LogApp />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path="default"
          element={
            <ErrorBoundary>
              <Suspense fallback={<Center><Spinner size="xl" /></Center>}>
                <DefaultPage />
              </Suspense>
            </ErrorBoundary>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
