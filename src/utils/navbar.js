import { useId } from "react";
import HomePage from "../pages/HomePage";
import PropertiesPage from "../pages/PropertiesPage";




export const navbar=[
    {id:useId,path:"/home",element:<HomePage/>,title:"Home",private:false,hidden:false},
    {id:useId,path:"/properties",element:<PropertiesPage/>,title:"Properties",private:false,hidden:false},
]