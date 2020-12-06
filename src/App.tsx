import React from "react";
import "./app.css";
import Header from "./components/Header";
import Career from "./components/Career";

export default function App() {
  return (
    <React.Fragment>
      <div className="app">
        <Header />
        <Career />
      </div>
    </React.Fragment>
  );
}
