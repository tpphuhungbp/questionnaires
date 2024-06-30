import React, { Component, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import QuestionnairesDashboard from "../pages/QuestionnairesDashboard";
import NotFound from "../pages/NotFound";
import PrivateRoute from "./PrivateRoute";
import AuthRoute from "./AuthRoute";

export default function Router() {
  return (
    <Routes>
      <Route path="/login" element={<AuthRoute />} />
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<QuestionnairesDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
