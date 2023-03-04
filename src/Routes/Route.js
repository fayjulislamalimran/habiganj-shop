// This is Router
import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home.js";
import Tops from "../Components/Tops/Tops.js";
import Main from "../Layout/Main.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/watch",
        element: <Tops></Tops>,
      },
    ],
  },
]);
export default router;
