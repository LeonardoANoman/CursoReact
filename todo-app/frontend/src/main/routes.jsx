import React from "react";
import { Router, Route, Redirect, hasHistory } from "react-router";

import Todo from "../todo/todo";
import About from "../about/about";
import Routes from "./routes";

export default (props) => (
  <Router history={hashHistory}>
    <Route path="/todos" component={Todo} />
    <Route path="about" component={About} />
    <Redirect from="*" to="Todos" />
  </Router>
);
