import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../Routes/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default Routes;
