import React from "react";
import preload from "../data.json";
import { Link } from "react-router-dom";

const LightSwitchOff = () => (
  <div className="light-switch-off">
    <div className="gray-box">
      <h1 className="off">Light Switch OFF</h1>
      <Link to="/light-switch-on">Turn lightswitch ON</Link>
      <Link to="/">Take me home</Link>
    </div>
  </div>
);

export default LightSwitchOff;
