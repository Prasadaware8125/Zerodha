import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './landing_page/Home/HomePage'
import Navbar from './landing_page/Navbar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <HomePage/>
    </>
  </StrictMode>,
)
