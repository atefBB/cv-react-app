import React from "react";

export default function Header({ logo }) {
  return (
      <header className="app-header">
        <img src={logo} className="app-logo" alt="Atef Ben Ali logo" />
        <p>
          My Carrer as an app.
        </p>
        <a
          className="app-link"
          href="#career"
          rel="noopener noreferrer"
        >
          Go through my career!
        </a>
      </header>
  );
}
