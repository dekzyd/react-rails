import React from "react";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <h3>HomeLayout</h3>
      <Outlet />
    </>
  );
};

export default HomeLayout;
