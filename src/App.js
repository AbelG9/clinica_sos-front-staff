import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/callcenter/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Home />
      </Switch>
    </Router>
  );
}

export default App;
