import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="homepage">
      <h1>Home Page</h1>
      <Link to="/about">About page</Link>
    </div>
  );
};

export default Home;
