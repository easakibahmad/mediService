import React from "react";
import treatMent from "../../../assets/images/treatment.png";
import PrimaryButton from "../../../components/primaryButton/PrimaryButton";

const AboutService = () => {
  return (
    <div className="mx-10 mb-10">
      <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={treatMent}
            className="lg:w-1/3 rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <PrimaryButton>Start Now</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutService;
