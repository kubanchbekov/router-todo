import React, { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CHILDREN_ROUTES } from "./ChildrenRoutes";
import TodoLayout from "../layout/TodoLayout";

const AppRouters = () => {
  const NotFaunt = lazy(() => import("../page/NotFaunt"));

  const router = createBrowserRouter([
    {
      path: "/",
      element: <TodoLayout />,
      children: CHILDREN_ROUTES,
      errorElement: <NotFaunt />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouters;
