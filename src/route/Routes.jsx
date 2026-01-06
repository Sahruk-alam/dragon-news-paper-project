import { createBrowserRouter } from "react-router";
import LayoutHome from "../Layout/LayoutHome";
import HomeLayout from "../component/HomeLayout/LeftAside";
import Home from "../component/Navbar/Home";
import About from "../component/Navbar/About";
import Career from "../component/Navbar/Career";
import CategoryNews from "../component/Navbar/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutHome></LayoutHome>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
      },
      
    ],
  },
  {
    path: "/auth",
    element: <div>Auth Page</div>,
  },

]);

export default router;
