import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <h1>About Page</h1>
      <Link to="/">Home page</Link>
    </div>
  );
};

export default About;
