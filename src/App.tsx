import React from "react";

import { Header } from "./components/Header";
import { Career } from "./components/Career";

import "./app.css";

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
