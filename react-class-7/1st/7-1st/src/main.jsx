import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ThemContext from './Component/ThemeContext.jsx'
import Usercontest from './Component/UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemContext>
    <Usercontest>
      <App />
    </Usercontest>
  </ThemContext>
)
