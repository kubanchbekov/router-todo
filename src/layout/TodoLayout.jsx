import React from "react";
import { Outlet } from "react-router-dom";

const TodoLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default TodoLayout;
