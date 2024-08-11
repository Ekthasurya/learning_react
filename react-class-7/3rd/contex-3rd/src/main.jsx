import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Todoprovider from '../context/Todocontext.jsx'

createRoot(document.getElementById('root')).render(
  <Todoprovider>
  <App />
  </Todoprovider>
)
