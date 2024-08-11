import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FocusInput from './Component/FocusInput'
import Uncontroll from './Component/Uncontroll'
import Interact from './Component/Interact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <FocusInput/>
     <Uncontroll/>
     <Interact/>
    </>
  )
}

export default App
