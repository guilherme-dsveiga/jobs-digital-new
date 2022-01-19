import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/home'
import Portfolio from './pages/portfolio';
import Services from './pages/services'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
