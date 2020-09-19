import React from 'react';
import logo from './logo.jpg';
import "./app.css";

export default function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="Atef Ben Ali logo" />
        <p>
          My Carrer as an app.
        </p>
        <a
          className="app-link"
          href="/career"
          rel="noopener noreferrer"
        >
          Go through my career!
        </a>
      </header>
    </div>
  );
}
