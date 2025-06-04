import { createBrowserRouter } from "react-router";
import About from "../page/About";
import Homepage from "../page/Homepage";
import Contact from "../page/Contact";
import MainLayout from "../layout/MainLayout";
import Blog from "../page/Blog";
import SignUp from "../page/SignUp";
import Login from "../page/Login";
import NotFound from "../page/NotFound";
import BlogDetails from "../page/BlogDetails";

export const routes = createBrowserRouter([
    {
      path:"/",
      element:<MainLayout/>,
      children: [
     {
      path:"/about",
      element:<About/>
     },
     {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/blog",
      element:<Blog/>
    },
    {
      path:"/blog/:id",
      element:<BlogDetails/>
    }
      ]
    },
    {
      path:"/sing-up",
      element:<SignUp/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"*",
      element:<NotFound/>
    }
    
  ])
