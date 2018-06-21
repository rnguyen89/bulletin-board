import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Board from './Board';
import About from './About';

import TopNav from './TopNav';
import Signup from "./Signup";
import Login from "./Login";
import NotFound from './NotFound';

export default () =>
  <Switch>
    <Route exact path="/home" component={Home} />
    <Route exact path="/board" component={Board} />
    <Route exact path="/about" component={About} />
    <Route exact path="/Signup" component={Signup} />
    <Route exact path="/login" component={Login} />
    <Route component={NotFound} />
  </Switch>