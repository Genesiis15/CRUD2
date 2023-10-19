import {LandingView} from './views/LandingView/LandingView'
import {
  createBrowserRouter,

  
} from "react-router-dom";
import App from './App'
export const router = createBrowserRouter([
    {
      path: "/",
      element: (
       <App/>
      ),
      children: [
        {
            path: "/",
            element: <LandingView/>,
          },
        {
          path: "/services",
          element: <div>services</div>,
        },
      ],
    },
 
  ]);