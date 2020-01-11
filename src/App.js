import React from "react";
import Home from "./pages/Home";
import Layout from "./layouts/Layout";
import CssBaseline from "@material-ui/core/CssBaseline";
function App() {
  return (
    <>
      <CssBaseline />
      <Layout>
        <Home />
      </Layout>
    </>
  );
}

export default App;
