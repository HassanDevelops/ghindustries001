import React from "react";
import AboutCard from "./AboutCard";
import AboutData from "../resources/data/AboutData";
const AboutCardHandle = () => {
  const Data = AboutData.map((data, index) => (
    <AboutCard key={index} {...data} />
  ));
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat( auto-fit, minmax(320px, 1fr )"
        }}
      >
        {Data}
      </div>
    </>
  );
};

export default AboutCardHandle;
