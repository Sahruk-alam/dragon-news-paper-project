import { createBrowserRouter } from "react-router";
import LayoutHome from "../Layout/LayoutHome";
import HomeLayout from "../component/HomeLayout/LeftAside";
import Home from "../component/Navbar/Home";
import About from "../component/Navbar/About";
import Career from "../component/Navbar/Career";
import CategoryNews from "../component/Navbar/CategoryNews";
import Login from "../component/pages/Login";
import Registration from "../component/pages/Registration";
import AuthLayout from "../Layout/AuthLayout";
import NewsDetails from "../component/pages/NewsDetails";
import PrivateRRoute from "../component/pages/PrivateRRoute";

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
        loader:()=>fetch('/news.json')
      },
      
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children:[
      {
        path:'/auth/login',
        element:<Login></Login>
      },
      {
        path:'/auth/registration',
        element:<Registration></Registration>
      }
    ]
  },
  {
    path:'/news-details/:id',
    element:<PrivateRRoute>
      <NewsDetails></NewsDetails>
    </PrivateRRoute>,
    loader:()=>fetch('/news.json'), 
  }

]);

export default router;
