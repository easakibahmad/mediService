import React from "react";
import chair from "../../../../src/assets/images/chair.png";
import PrimaryButton from "../../../components/primaryButton/PrimaryButton";

const Banner = () => {
  return (
    <div className="m-16">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" alt="" />
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

export default Banner;
