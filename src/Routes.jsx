import { LandingView, CommerceView, ProductView } from './views'
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
        path: "/shop",
        element: <CommerceView />,
      },
      {
        path: "/shop/:id",
        element: <ProductView />,
      },
      {
        path: "/cart",
        element: <h1>cart</h1>,
      },

    ],
  },

]);