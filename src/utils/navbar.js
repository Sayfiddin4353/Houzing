import React from "react";
import SigninPage from "../pages/SigninPage";
const PropertiesPage = React.lazy(() => import("../pages/PropertiesPage"));
const HomePage = React.lazy(() => import("../pages/HomePage"));
const HomeItemPage = React.lazy(() => import("../pages/HomeItemPage"));

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
    element: <SigninPage />,
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
];
