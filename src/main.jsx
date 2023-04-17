import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Checkout from './components/Checkout'
import Home from './components/Home'
import Inventory from './components/Inventory'
import Login from './components/Login'
import Order from './components/Order'
import AuthProvider from './components/Providers/AuthProvider'
import Registration from './components/Registration'
import Shop from './components/Shop/Shop'
import './index.css'
import cartProductsLoader from './Loaders/CartProductsLoader'
import PrivateRoute from './PrivateRoute'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: 'order',
        element: <Order></Order>,
        loader: () => fetch('products.json')
      },
      {
        path: 'inventory',
        element: <Inventory></Inventory>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'checkout',
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
      },
      {
        path: 'registration',
        element: <Registration></Registration>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
)
