import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../Redux/action'

function App() {
  const Dispatch = useDispatch()
  const Counter = useSelector((state)=>state.counter)

  return (
    <>
       <div>
       <h1>Counter: {Counter}</h1>

       <button onClick={()=>Dispatch(increment())}>increment</button>
       <button onClick={()=>Dispatch(decrement())}>decrement</button>

     </div>
    </>
  )
}

export default App
