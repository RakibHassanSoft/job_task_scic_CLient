import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductCard from './ProductCard.jsx'
import Products from './pages/Products.jsx'
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import AuthProvider, { AuthContext } from './provider/AuthProvider.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './pages/Main.jsx'
import PrivetRoute from './route/PrivetRoute.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element:<PrivetRoute><Products></Products></PrivetRoute>
       
      },
      {
        path:"/login",
        element:<Login></Login>
       
      },
      {
        path:"/register",
        element:<Register></Register>
       
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}

   <AuthProvider>
      <RouterProvider router={router} />
   </AuthProvider>

  </StrictMode>,
)
