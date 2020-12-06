import React from "react";
import logo from "../logo.jpg";

export default function Header() {
  return (
      <header className="app-header">
        <img src={logo} className="app-logo" alt="Atef Ben Ali logo" />
      </header>
  );
}
