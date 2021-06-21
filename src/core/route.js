import React, { Suspense } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import AppContainer from "../containers/app-container";
import LayoutWrapperContainer from "../core/layout";
import routes from "./routes";

const Routes = () => {
  const renderRoutes = () => {
    return (
      <Route>
        <LayoutWrapperContainer>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={true}
                component={route.component}
              />
            ))}
            <Redirect to={"404"} />
          </Switch>
        </LayoutWrapperContainer>
      </Route>
    );
  };

  return (
    <AppContainer>
      <Suspense fallback={<React.Fragment />}>
        <Switch>{renderRoutes()}</Switch>
      </Suspense>
    </AppContainer>
  );
};

export default withRouter(Routes);
