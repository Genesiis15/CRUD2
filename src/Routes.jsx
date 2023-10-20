import { LandingView, CommerceView } from './views/'
import {
  createBrowserRouter,
} from "react-router-dom";
import App from './App'
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App />
    ),
    children: [
      {
        path: "/",
        element: <LandingView />,
      },
      {
        path: "/commerce",
        element: <CommerceView />,
      },
    ],
  },

]);