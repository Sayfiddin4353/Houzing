import React from "react";
const PropertiesPage = React.lazy(() => import("../pages/PropertiesPage"));
const HomePage = React.lazy(() => import("../pages/HomePage"));




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
    element: <h1>SignIn</h1>,
    title: "SignIn",
    private: false,
    hidden: true,
  },
];
