import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Page2 from "./Page2";
import Profile from "./Profile";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/page2" component={Page2} /> 
      <Route exact path="/profile" component={Profile} />
        
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;