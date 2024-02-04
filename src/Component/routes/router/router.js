import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home";
import SingUp from "../../../Pages/Auth/singup/SingUp";
import { Login } from "../../../Pages/Auth/Login/Login";



export const router = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>
    },
    {
        path:'/singin',
        element:<Login/>
    },
    {
        path:'/Singup',
        element:<SingUp/>
    }
])