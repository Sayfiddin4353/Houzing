import React from "react";
import RegisterPage from "../pages/RegisterPage";
const AddPropertiesPage=React.lazy(()=>import("../pages/AddPropertiesPage"))
const PropertiesPage = React.lazy(() => import("../pages/PropertiesPage"));
const HomePage = React.lazy(() => import("../pages/HomePage"));
const HomeItemPage = React.lazy(() => import("../pages/HomeItemPage"));
const MyProfilePage = React.lazy(() => import("../pages/MyProfilePage"));
const MyPropertiesPage = React.lazy(() => import("../pages/MyPropertiesPage"));
const FavouritePage = React.lazy(() => import("../pages/FavouritePage"));
export const navbar = [
  {
    id: 1,
    path: "/home",
    element: (
      <React.Suspense fallback={<>Loading...</>}>
        <HomePage />
      </React.Suspense>
    ),
    title: "Home",
    private: false,
    hidden: false,
  },
  {
    id: 2,
    path: "/properties",
    element: (
      <React.Suspense fallback={<>Loading...</>}>
        <PropertiesPage />
      </React.Suspense>
    ),
    title: "Properties",
    private: false,
    hidden: false,
  },
  {
    id: 3,
    path: "/signin",
    element: <RegisterPage />,
    title: "SignIn",
    private: false,
    hidden: true,
  },
  {
    id: 4,
    path: "/properties/:id",
    element: (
      <React.Suspense fallback={<>Loading...</>}>
        <HomeItemPage />
      </React.Suspense>
    ),
    title: "HouseItem",
    private: false,
    hidden: true,
  },
  {
    id: 5,
    path: "/myprofile",
    element: (
      <React.Suspense fallback={<>Loading...</>}>
        <MyProfilePage />
      </React.Suspense>
    ),
    title:"My Profile",
    private: false,
    hidden: true,
  },
  {
    id: 6,
    path: "/myproperties",
    element: (
      <React.Suspense fallback={<>Loading...</>}>
        <MyPropertiesPage />
      </React.Suspense>
    ),
    title:"My Properties",
    private: false,
    hidden: true,
  },
  {
    id: 7,
    path: "/myfavourits",
    element: (
      <React.Suspense fallback={<>Loading...</>}>
        <FavouritePage />
      </React.Suspense>
    ),
    title:"Favourite",
    private: false,
    hidden: true,
  },
  {
    id:8,
    path:'/myproperties/addproperties',
    element:(
      <React.Suspense fallback={<>Loading...</>}>
        <AddPropertiesPage/>
      </React.Suspense>
    ),
    private:false,
    hidden:true
  },
  {
    id:9,
    path:'/myproperties/edithouse/:id',
    element:(
      <React.Suspense fallback={<>Loading...</>}>
        <AddPropertiesPage/>
      </React.Suspense>
    ),
    private:false,
    hidden:true
  }
];
