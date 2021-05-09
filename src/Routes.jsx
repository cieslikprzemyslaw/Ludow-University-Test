import React from "react";
import { Route, Switch } from "react-router";

import Home from './pages/Home';
import Research from './pages/Research';
import Study from './pages/Study';
import About from './pages/About';
import BookOpenDay from "./pages/BookOpenDay";
import Stories from "./pages/Stories";
import Events from "./pages/Events";

function Routes() {
  return (
    <>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/research" component={Research} />
          <Route path="/study" component={Study} />
          <Route path="/about" component={About} />
          <Route path="/bookday" component={BookOpenDay} />
          <Route path="/stories" component={Stories} />
          <Route path="/events" component={Events} />
      </Switch>
    </>
  );
}

export default Routes;
