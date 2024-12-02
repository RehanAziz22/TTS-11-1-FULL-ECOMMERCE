import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserProvider } from './contexts/UserContext.jsx'
import { AdminProvider } from './contexts/AdminContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AdminProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </AdminProvider>
  </StrictMode>,
)
