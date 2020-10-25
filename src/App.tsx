import React from "react";
import "./app.css";
import Header from "./components/Header";
import Career from "./components/Career";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <React.Fragment>
      <div className="app">
        <Header />
      </div>
      <Router>
        <Switch>
          <Route path="/career" component={Career} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}
