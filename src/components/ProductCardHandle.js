import React from "react";
import ProductCard from "./ProductCard";
import ProductData from "../resources/data/ProductData";
import { Grid } from "@material-ui/core";
const AboutCardHandle = () => {
  const Data = ProductData.map((data, index) => (
    <ProductCard key={index} {...data} />
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
