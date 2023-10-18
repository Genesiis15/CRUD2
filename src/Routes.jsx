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
      path: "about",
      element: <div>About</div>,
    },
  ]);