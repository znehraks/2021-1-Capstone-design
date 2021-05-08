import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Aboutus from "../Routes/Aboutus";
import Auth from "../Routes/Auth";
import Home from "../Routes/Home";
import Recommendation from "../Routes/Recommendation";
import RecommendationIntro from "../Routes/RecommendationIntro";
import RecommendationResult from "../Routes/RecommendationResult";
import RecommendationResultTest from "../Routes/RecommendationResultTest";
import Result from "../Routes/Result";
import ResultHistory from "../Routes/ResultHistory";
import Admin from "../Routes/Admin";

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
        path="/RecommendationResult/:univ_name/:univ_lat/:univ_lon/:Q2Answer/:w1/:w2/:w3/:w4/:w5"
        component={RecommendationResult}
      ></Route>
      <Route exact path="/Test" component={RecommendationResultTest}></Route>
      <Route exact path="/Result" component={Result}></Route>
      <Route exact path="/ResultHistory" component={ResultHistory}></Route>
      <Route exact path="/Auth" component={Auth}></Route>
      <Route exact path="/12284!232842A244" component={Admin}></Route>
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default Routes;
