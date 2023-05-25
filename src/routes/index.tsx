import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Countries from "../pages/Countries/Countries";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/countries",
    element: <Countries />,
  },
]);
