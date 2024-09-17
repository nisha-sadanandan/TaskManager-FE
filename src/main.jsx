import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import NavbarLayout from './layout/NavbarLayout.jsx';
import Home from './components/Home.jsx';
import SignupPage from './layout/SignupPage.jsx';
import Signin from './layout/SigninPage.jsx';
import TaskPage from './layout/TaskPage.jsx';
import Addtask from './components/Addtask.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarLayout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
    ],
    
  },

  {
    path: "/signup",
    element: <SignupPage/>,
  },

  
  {
    path: "/signin",
    element: <Signin/>,
  },

  {
    path: "/userhome",
    element: <TaskPage/>,
  },

  {
    path: "/addtask",
    element: <Addtask/>,
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
