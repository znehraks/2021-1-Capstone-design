import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Aboutus from "../Routes/Aboutus";
import Home from "../Routes/Home";
import Recommendation from "../Routes/Recommendation";
import RecommendationIntro from "../Routes/RecommendationIntro";
import RecommendationResult from "../Routes/RecommendationResult";
import Result from "../Routes/Result";
import ResultHistory from "../Routes/ResultHistory";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/Aboutus" component={Aboutus}></Route>
      <Route
        exact
        path="/RecommendationIntro"
        component={RecommendationIntro}
      ></Route>
      <Route exact path="/Recommendation" component={Recommendation}></Route>
      <Route
        exact
        path="/RecommendationResult/:Q1Answer/:Q2Answer/:weightcode"
        component={RecommendationResult}
      ></Route>
      <Route exact path="/Result" component={Result}></Route>
      <Route exact path="/ResultHistory" component={ResultHistory}></Route>
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default Routes;
