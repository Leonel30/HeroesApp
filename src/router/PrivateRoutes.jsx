import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const PrivateRoutes = ({ children }) => {

 

  const { logged } = useContext(AuthContext)
   //recordar la ultima seccion en la q estaba //
   
  const { pathname , search} = useLocation()

  const lastView = pathname + search

  localStorage.setItem('lastView', lastView)

  return logged ? children : <Navigate to="/login" />;
};
