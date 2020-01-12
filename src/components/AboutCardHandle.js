import React from "react";
import AboutCard from "./AboutCard";
import AboutData from "../resources/data/AboutData";
import { Grid } from "@material-ui/core";
const AboutCardHandle = () => {
  const Data = AboutData.map((data, index) => (
    <AboutCard key={index} {...data} />
  ));
  return (
    <>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="flex-start"
      >
        {Data}
      </Grid>
    </>
  );
};

export default AboutCardHandle;
