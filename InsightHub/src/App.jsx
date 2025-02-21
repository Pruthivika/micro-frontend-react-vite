import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { Routes, Route } from "react-router-dom"
import DashboardPage from "./pages/DashboardPage"
import LogPage from "./pages/LogPage"
import HomePage from './pages/HomePage'
import Layout from "./Layout";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/log" element={<LogPage />} />
      </Routes>
    </Layout>


  )
}

export default App
