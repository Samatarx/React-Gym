import React from "react";
import Home from "./Home";
import Signup from "./Signup";
import Location from "./Location";
import Nav from "./Nav";
import Footer from "./Footer";
import Careers from "./Careers";
import AboutUs from "./AboutUs";
import Terms from "./Terms";
import Covid from "./Covid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Router>
        <Nav />
        <Switch>
          <Route path="/Signup">
            <Signup />
          </Route>
          <Route path="/Location">
            <Location />
          </Route>
          <Route path="/Careers">
            <Careers />
          </Route>
          <Route path="/AboutUs">
            <AboutUs />
          </Route>
          <Route path="/Terms">
            <Terms />
          </Route>
          <Route path="/Covid-19">
            <Covid />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Grid>
  );
}

export default App;
