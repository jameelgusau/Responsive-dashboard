import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Dash from "./pages/Dash";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";

function Main() {
  let { path, url } = useRouteMatch();
  const routes = [
    {
      path: "/dashboard/",
      exact: true,
      main: () => <Dash />,
    },
    {
      path: "/dashboard/students",
      exact: true,
      main: () =><Students />,
    },
    {
      path: "/dashboard/teachers",
      exact: true,
      main: () =>  <Teachers />,
    },
  ];
  return (
    <main className="main">
      <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {/* <Route exact path={path} component={Main} /> */}
        {routes.map((route, index) => (
          // You can render a <Route> in as many places
          // as you want in your app. It will render along
          // with any other <Route>s that also match the URL.
          // So, a sidebar or breadcrumbs or anything else
          // that requires you to render multiple things
          // in multiple places at the same URL is nothing
          // more than multiple <Route>s.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            children={<route.main />}
          />
        ))}
        {/* <Route path="/" component={ Dash }/> */}
      </Switch>
      </Suspense>
    </main>
  );
}

export default Main;
