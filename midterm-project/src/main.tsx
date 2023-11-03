import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'  
import { Posts } from './Posts.tsx'
import { Bio } from './Bio.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Posts />
  },
  {
    path: '/bio',
    element: <Bio />
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
