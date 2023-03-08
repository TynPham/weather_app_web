import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const MainLayout = () => {
  if (!localStorage.getItem("user")) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default MainLayout;
