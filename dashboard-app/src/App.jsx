import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LineChart from './exports/LineChart'
import DemoPage from './pages/Demo'

function App() {


  return (
    <>

      <h1>dashboard app</h1>
      <LineChart />
      <DemoPage />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
