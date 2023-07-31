import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./HomeLayout.css";

const HomeLayout = () => {
  return (
    <div className="home">
      <div className="home__nav">
        <Sidebar />
      </div>
      <div className="home__timeline">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
