import { createBrowserRouter } from "react-router";
import LayoutHome from "../Layout/LayoutHome";


const router=createBrowserRouter([
    {
        path:'/',
        element:<LayoutHome></LayoutHome>
    },
    {
        path:'/auth',
        element:<div>Auth Page</div>
    },
    {
        path:'/dashboard',
        element:<div>Dashboard Page</div>
    },
    {
        path:'/*',
        element:<div>Error Page</div>
    },
]);

export default router;