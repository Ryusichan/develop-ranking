import { Navigate, useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import React from "react";
// layouts
// import DashboardLayout from "../layouts/dashboard";

// import GlobalLayout from "../layouts/globalLayout";

// ----------------------------------------------------------------------

const Router = () => {
  return useRoutes([
    // automatic
    {
      path: "/dashboard",

      //   element: <DashboardLayout />,
      children: [
        //automatic
        // { element: <Navigate to="/dashboard/app" replace={true} /> },
        // { path: "app", element: <MainAppPage /> },
      ],
    },
    // global
    { path: "/", element: <Home /> },
  ]);
};

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default AppWrapper;
