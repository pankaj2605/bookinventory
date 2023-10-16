import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import Blog from "../components/Blog";
import About from "../components/About";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
            {
                path:'/',
                element:<Home/>,
            },{
                path:'/shop',
                element:<Shop/>,
            },
            {
                path:'/about',
                element:<About/>,
            },
            {
                path:'/blog',
                element:<Blog/>,
            },{
                path:"/book/:id",
                element:<SingleBook/>,
                loader:({params})=>fetch(`/api/book/${params.id}`)
            }
        ]
    },
    {
        path: "/admin/dashBoard",
        element: <DashboardLayout/>,
        children:[
            {
                path:'/admin/dashBoard',
                element:<Dashboard/>,
            },
            {
                path:'/admin/dashBoard/upload',
                element:<UploadBook/>,
            },
            {
                path:'/admin/dashBoard/manage',
                element:<ManageBooks/>,
            },
            {
                path:'/admin/dashBoard/edit-books/:id',
                element:<EditBooks/>,
                loader:({params})=>fetch(`/api/book/admin/dashBoard/edit-books/${params.id}`)
            },
        ]
    },
  ]);



  export default router;