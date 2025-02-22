import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LogList from './exports/LogList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Log app</h1>
      <LogList />
    </>
  )
}

export default App
