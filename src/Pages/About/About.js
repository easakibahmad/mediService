import React from "react";
import AboutHeading from "./AboutHeading";
import Aims from "./Aims";
import Confidentiality from "./Confidentiality";
import Message from "./Message";

const About = () => {
  return (
    <div>
      {/* <div className="h-6 " style={{ backgroundColor: "#40E0D0" }}></div> */}
      {/* <div className="h-1 bg-black"></div> */}
      <div className="md:mt-2">
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
    </div>
  );
};

export default About;
