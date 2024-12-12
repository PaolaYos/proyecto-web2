import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Principal from './Principal.jsx'

import { BrowserRouter } from 'react-router-dom';
import Fotoss from './Fotoss.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Principal />
    <Fotoss />
    <Footer />
  </BrowserRouter>,
)
