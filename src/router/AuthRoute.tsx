import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { accessToken } from "../services/auth";

const AuthRoute = () => {
  //   const authenticated = accessToken.get();
  const authenticated = accessToken.get();

  if (authenticated !== "") return <Navigate to="/" replace />;

  return <Outlet />;
};

export default AuthRoute;
