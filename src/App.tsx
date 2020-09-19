import React from 'react';
import logo from './logo.jpg';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My Carrer as an app.
        </p>
        <a
          className="App-link"
          href="/to/the/hell"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to the hell!
        </a>
      </header>
    </div>
  );
}
