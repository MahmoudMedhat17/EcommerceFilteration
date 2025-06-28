import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import StoreContext from './context/Storecontext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreContext>
  </StrictMode>,
)
