import React from "react";
import Home from "./Home";
import Signup from "./Signup";
import Location from "./Location";
import Nav from "./Nav";
import Footer from './Footer'
import Careers from './Careers'
import AboutUs from './AboutUs'
import Terms from './Terms'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
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
        <Route path="/">
          <Home />
        </Route>
      </Switch>
     <Footer/>
    </Router>
  );
}

export default App;
