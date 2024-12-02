import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CustomerPanel from './pages/CustomerPanel/CustomerPanel'
import Home from './pages/CustomerPanel/Home'
import Login from './pages/CustomerPanel/Login'
import Signup from './pages/CustomerPanel/Signup'
import About from './pages/CustomerPanel/About'
import AdminDashboard from './pages/AdminPanel/AdminDashboard'

export default function App() {

  let router = createBrowserRouter([
    {
      path: '/',
      element: <CustomerPanel />,
      children: [
        { path: '/', element: <Home /> },
        { path: 'login', element: <Login /> },
        { path: 'signup', element: <Signup /> },
        { path: 'about', element: <About /> },
      ]
    },   {
      path: '/admin',
      element: <AdminDashboard />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/login', element: <Login /> },
        { path: '/signup', element: <Signup /> },
        { path: '/about', element: <About /> },
      ]
    },

  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
