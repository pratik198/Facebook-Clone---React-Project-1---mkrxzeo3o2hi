import React from "react";
import { Outlet, Navigate } from "react-router";
import Navbar from "../Navbar";

function ProtectedRoute() {
  const token = localStorage.getItem("token");

  return (
    <>
      {token && <Navbar />}
      {token ? <Outlet /> : <Navigate to="/" />}
    </>
  );
}

export default ProtectedRoute;
