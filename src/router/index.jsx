import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <NotFound />
  },
  {
    path: "/blog",
    element: <Blog />,
    errorElement: <NotFound />
  }
]);