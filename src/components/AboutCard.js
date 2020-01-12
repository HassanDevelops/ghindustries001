import React from "react";
import Card from "./Card";
import AboutData from "../resources/data/AboutData";
import { Grid } from "@material-ui/core";
const AboutCard = () => {
  const Data = AboutData.map((data, index) => <Card key={index} {...data} />);
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

export default AboutCard;
