import React from "react";
import { Switch, Route } from "react-router-dom";
import App1 from "./App1";
import App2 from "./App2";
import Welcome from "./Welcome";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={App1} />
      <Route exact path="/last" component={App2} />
      <Route exact path="/welcome" component={Welcome} />
    </Switch>
  </main>
);

export default Main;
