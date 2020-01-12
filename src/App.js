import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./layouts/Layout";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Switch, Route } from "react-router-dom";

const App = props => {
  return (
    <>
      <CssBaseline />
      {console.log(props)}
      {console.log("process : " + process.env.PUBLIC_URL)}

      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/products" exact component={Products} />

          <Route
            exact
            path={`/about`}
            render={routerProps => <About routerProps={routerProps} />}
          />

          <Route component={PageNotFound} />
        </Switch>
      </Layout>
    </>
  );
};

export default App;
