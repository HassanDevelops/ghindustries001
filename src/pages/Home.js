import React from "react";
import AboutCard from "../components/AboutCard";
import AboutData from "../resources/data/AboutData";

const Home = () => {
  const id = 3;
  const data = AboutData[2];
  if (data.id === id) {
    return (
      <>
        <div>
          <AboutCard
            id={data.id}
            heading={data.heading}
            title={data.title}
            description={data.description}
            source={data.source}
          />
        </div>
      </>
    );
  }
};

export default Home;
