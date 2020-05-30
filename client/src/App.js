import React from "react";
import { Route, Switch, Router, Redirect } from "react-router-dom";
import Home from "./views/Home";
import history from "./history";
import PageNotFound from "./views/PageNotFound";

const App = (props) => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/page-not-found" component={PageNotFound} exact />
        <Redirect from="*" to="/page-not-found" />
      </Switch>
    </Router>
  );
};

export default App;
