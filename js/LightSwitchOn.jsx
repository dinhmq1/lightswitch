import React from "react";
import preload from "../data.json";
import { Link } from "react-router-dom";

const LightSwitchOn = () => (
  <div className="light-switch-on">
    <div className="gray-box">
      <h1 className="on">Light Switch ON</h1>
      <Link to="/light-switch-off">Turn lightswitch OFF</Link>
      <Link to="/">Take me home</Link>
    </div>
  </div>
);

export default LightSwitchOn;
