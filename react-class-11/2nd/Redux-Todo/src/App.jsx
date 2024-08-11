import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Addtodo from '../components/Addtodo'
import Showdata from '../components/Showdata'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Addtodo/>
       <Showdata/>
    </>
  )
}

export default App
