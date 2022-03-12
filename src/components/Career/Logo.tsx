import React from "react";

import logo from "../../logo.jpg";

export function Logo() {
  return (
    <img
      src={logo}
      className="app-logo"
      style={{ width: "60px", height: "60px" }}
      alt="Atef Ben Ali logo"
    />
  );
}
