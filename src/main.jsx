import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Router/Router'
import Context from './FriendContext/Context'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context>

    <RouterProvider router={router}/>
     <ToastContainer
     position="top-center"
      autoClose={3000}/>

    </Context>

  </StrictMode>,
)
