import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Router/Router'
import Context from './FriendContext/Context'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context>

    <RouterProvider router={router}/>

    </Context>

  </StrictMode>,
)
