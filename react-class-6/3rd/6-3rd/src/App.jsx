import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DynamicForm from './Component/DynamicForm'
import Validation from './Component/Validation'
import CustomForm from './Component/CustomForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DynamicForm/>
      <Validation/>
      <CustomForm/>
    </>
  )
}

export default App
