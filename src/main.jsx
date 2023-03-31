import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// Routes
import Root from './routes/root'
import ErrorPage from './error-page'
import Home from './routes/home'
import About from './routes/about'
import Menu from './routes/menu'
import Contact from './routes/contact'

// root route will display everywhere and children display based on root.js outlet
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
