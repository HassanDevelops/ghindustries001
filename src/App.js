import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./layouts/Layout";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact componeny={About} />
            <Route path="/products" exact component={Products} />
            <Route component={PageNotFound} />
          </Switch>
        </Layout>
      </Router>
    </>
  );
};

export default App;
