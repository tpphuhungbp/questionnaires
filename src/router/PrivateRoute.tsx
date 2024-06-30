import { access } from "fs";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { accessToken } from "../services/auth";

const PrivateRoute = () => {
  //   const authenticated = accessToken.get();
  const authenticated = accessToken.get();

  if (authenticated === "") return <Navigate to="/login" replace />;

  return <Outlet />;
};

export default PrivateRoute;
