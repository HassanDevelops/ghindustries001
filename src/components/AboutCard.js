import React from "react";
import Card from "./Card";
import AboutData from "../resources/data/AboutData";
const AboutCard = () => {
  const Data = AboutData.map((data, index) => <Card key={index} {...data} />);
  return <div>{Data}</div>;
};

export default AboutCard;
