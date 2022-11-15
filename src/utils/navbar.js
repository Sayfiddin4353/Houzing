
import HomePage from "../pages/HomePage";
import PropertiesPage from "../pages/PropertiesPage";




export const navbar=[
    {id:1,path:"/home",element:<HomePage/>,title:"Home",private:false,hidden:false},
    {id:2,path:"/properties",element:<PropertiesPage/>,title:"Properties",private:false,hidden:false},
    {id:3,path:"/signin",element:<h1>SignIn</h1>,title:"SignIn",private:false,hidden:true},
]