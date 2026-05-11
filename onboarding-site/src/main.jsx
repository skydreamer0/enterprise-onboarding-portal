import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// 加上 basename 讓 GitHub Pages 能正確處理子路徑路由
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/enterprise-onboarding-portal">
      <App />
    </BrowserRouter>
  </StrictMode>,
)
