import React from "react";
import useUserStore from "../Store/userStore";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const Protected = ({ compo }) => {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);

  const location = useLocation();

  if (!isLoggedIn) {
    toast.warn("Login To Continue!");
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }

  return compo;
};

export default Protected;
