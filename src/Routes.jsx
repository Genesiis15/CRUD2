import {LandingView} from './views/LandingView/LandingView'
import {
  createBrowserRouter,

  
} from "react-router-dom";
export const router = createBrowserRouter([
    {
      path: "/",
      element: (
       <LandingView/>
      ),
    },
    {
        path: "services",
        element: <div>Services</div>,
      },
    {
      path: "about",
      element: <div>About</div>,
    },
  ]);