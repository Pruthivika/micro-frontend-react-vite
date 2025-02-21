import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LineChart from 'dashboardApp/LineChart'
import TestComponent from './TestComponent'
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LogPage from "./pages/LogPage";
import HomePage from './pages/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/log" element={<LogPage />} />
    </Routes>

  )
}

export default App
