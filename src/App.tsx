import React from 'react';
import "./app.css";
import logo from "./logo.jpg";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="app">
    	<Header logo={logo} />
    </div>
  );
}
