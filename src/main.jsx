import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import NavbarContainer from './Components/Navbar/NavbarContainer.jsx'
import FooterContainer from './Components/Footer/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <NavbarContainer />
      <App />
    <FooterContainer />
    </BrowserRouter>
  </StrictMode>,
)
