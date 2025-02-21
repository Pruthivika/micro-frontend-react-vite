import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LogPage from "./pages/LogPage";
import HomePage from "./pages/HomePage";
import Layout from "./Layout";
import DefaultPage from "./pages/DefaultPage";
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="log" element={<LogPage />} />
        <Route path="default" element={<DefaultPage />} />
      </Route>
    </Routes>
  );
}

export default App;
