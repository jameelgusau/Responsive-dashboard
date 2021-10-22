import React, { lazy, Suspense } from "react";
import { hot } from "react-hot-loader/root";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// import Dashboard from "./components/Dashboard/Dashboard";

const Login = lazy(() => import("./components/Login/Login"));
const Dashboard = lazy(() => import("./components/Dashboard/Dashboard"));
const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Redirect from="*" to="/dashboard" />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default hot(App);
