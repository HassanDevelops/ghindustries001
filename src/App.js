import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Layout from "./layouts/Layout";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Layout>
              <Home />
            </Layout>
          </Route>
          <Route path="/about" exact>
            <Layout>
              <About />
            </Layout>
          </Route>
          <Route path="/products" exact>
            <Layout>
              <Products />
            </Layout>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
