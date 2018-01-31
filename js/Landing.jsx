import React from "react";
import { Link } from "react-router-dom";

const Landing = () => (
  <div className="app">
    <div className="gray-box">
      <h1>Please turn light switch on or off...</h1>
      <Link to="/light-switch-on">Light Switch ON</Link>
      <Link to="/light-switch-off">Light Switch OFF</Link>
    </div>
  </div>
);

export default Landing;
