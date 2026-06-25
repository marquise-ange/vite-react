import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
    {/* // these allows the browser to to listen where the user is and to change the url accordingly */}
        <App />
    </BrowserRouter>
  </StrictMode>,
)