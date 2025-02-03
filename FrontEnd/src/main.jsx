import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import ErrorPage from './components/ErrorPage';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Forget from './components/Auth/Forget';
import About from './components/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/about',
        element: <About/>
      }, 
      {
        path: '/login',
        element: <Login/>
      }, 
      {
        path: '/register',
        element: <Register/>
      }, 
      {
        path: '/forget-password',
        element: <Forget/>
      }, 
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
