import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Forminput from '../components/Forminput'
import Todolist from '../components/Todolist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col items-center justify-center w-[100vw] gap-10'>
    <Forminput/>
     <Todolist/>
  </div>
    </>
  )
}

export default App
