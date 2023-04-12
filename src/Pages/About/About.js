import React from "react";
import AboutHeading from "./AboutHeading";
import Aims from "./Aims";
import Confidentiality from "./Confidentiality";
import Message from "./Message";

const About = () => {
  return (
    <div className="md:mt-2 mt-8" style={{ "font-family": "Roboto" }}>
      <div className="grid md:grid-cols-2">
        <AboutHeading></AboutHeading>
        <div className="my-auto">
          <Aims></Aims>
        </div>
      </div>
      <div className="my-auto">
        <Confidentiality></Confidentiality>
      </div>
      <div className="flex justify-center">
        <div className="md:w-2/3">
          <Message></Message>
        </div>
      </div>
    </div>
  );
};

export default About;
