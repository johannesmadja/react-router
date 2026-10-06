import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { RouterProvider } from 'react-router'
import { ROUTER } from './app/router'

const rootElement = document.getElementById('root'); 
const root = createRoot(rootElement);
 
root.render(
  <StrictMode>
    <RouterProvider router={ROUTER}/>
  </StrictMode>
)
