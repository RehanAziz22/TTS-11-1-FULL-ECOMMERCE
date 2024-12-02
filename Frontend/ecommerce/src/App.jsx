import React, { useContext } from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import CustomerPanel from './pages/CustomerPanel/CustomerPanel'
import Home from './pages/CustomerPanel/Home'
import Login from './pages/CustomerPanel/Login'
import Signup from './pages/CustomerPanel/Signup'
import About from './pages/CustomerPanel/About'
import AdminDashboard from './pages/AdminPanel/AdminDashboard'
import { AdminContext } from './contexts/AdminContext'
import AdminLogin from './pages/AdminPanel/AdminLogin'
import { UserContext } from './contexts/UserContext'
import Products from './pages/AdminPanel/Products'
import Users from './pages/AdminPanel/Users'
import Admins from './pages/AdminPanel/Admins'

export default function App() {
  let { admin } = useContext(AdminContext)
  let { user } = useContext(UserContext)

  let currentAdmin = admin || localStorage.getItem('currentAdmin')
  let currentUser = user || localStorage.getItem('currentUser')


  const AdminRoute = ({ children }) => {
    if (currentUser) return <Navigate to="/" />; // Redirect user to CustomerPanel if logged in as user
    return currentAdmin ? children : <AdminLogin />; // Redirect to AdminLogin if not logged in as admin
  };

  const UserRoute = ({ children }) => {
    if (currentAdmin) return <Navigate to="/admin" />; // Redirect admin to AdminDashboard if logged in as admin
    return currentUser ? children : <Navigate to="/login" />; // Redirect to Login if not logged in as user
  };



  let router = createBrowserRouter([
    {
      path: '/',
      element: (
        <UserRoute>
          <CustomerPanel />
        </UserRoute>
      ),
      children: [
        { path: '/', element: <Home /> },
        { path: 'login', element: <Login /> },
        { path: 'signup', element: <Signup /> },
        { path: 'about', element: <About /> },
      ]
    }, {
      path: "/admin",
      element: (
        <AdminRoute>
          <AdminDashboard />
        </AdminRoute>
      ),
      children: [
        // {
        //   path: "/admin",
        //   element: currentAdmin ? <AdminDashboard /> : <AdminLogin />,
        // },
        {
          path: "/admin/products",
          element: <Products />,
        }, {
          path: "/admin/users",
          element: <Users />,
        }, {
          path: "/admin/admins",
          element: <Admins />,
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
