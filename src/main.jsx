import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './Router/Router'
import { RouterProvider } from 'react-router-dom'
import WishlistProvider from './ContextApi/WishlistContext'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WishlistProvider>
      <RouterProvider router={router} />
      <Toaster />
    </WishlistProvider>
  
  </StrictMode>
)
