import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './components/Home'
import Inventory from './components/Inventory'
import Login from './components/Login'
import Order from './components/Order'
import Shop from './components/Shop/Shop'
import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path : '/',
        element: <Shop></Shop>
      },
      {
        path: 'order',
        element: <Order></Order>
      },
      {
        path: 'inventory',
        element: <Inventory></Inventory>
      },
      {
        path : 'login',
        element : <Login></Login>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
