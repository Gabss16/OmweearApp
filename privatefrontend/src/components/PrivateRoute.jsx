import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = () => {
  const { isLoggedIn } = useAuth();
  const test = true;
  return test ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
