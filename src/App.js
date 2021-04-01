import React from "react";
import Home from "./Home";
import Signup from "./Signup";
import Location from "./Location";
import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/Signup">
          <Signup />
        </Route>
        <Route path="/Location">
          <Location />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
