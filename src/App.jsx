import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const checkLog = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  return isLoggedIn ?
  (
    <>
      <Home checkLog={checkLog} />
    </>
  ) :
  (
    <>
    <Login checkLog={checkLog} />
    </>
  )
}

export default App
