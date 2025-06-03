import { createBrowserRouter } from "react-router";

export const value = createBrowserRouter([
    {
      path:"/",
      element:<div>Hello react router</div>
    },
    {
      path:"/about",
      element:<div>About Page</div>
    },
    {
      path:"/contact",
      element:<div>Contact Page</div>
    }
  ])
