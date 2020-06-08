import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landingpage from "./components/Landingpage";
import Main from "./components/Main";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/portforlio/" exact component={Landingpage} />
        <Route path="/main" exact component={Main} />
      </Switch>
    </Router>
  );
};

export default Routes;
