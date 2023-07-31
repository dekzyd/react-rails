import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const HomeLayout = () => {
  return (
    <>
      <h3>HomeLayout</h3>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default HomeLayout;
