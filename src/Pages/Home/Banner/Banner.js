import React from "react";
import chair from "../../../../src/assets/images/chair.png";
import healthCare from "../../../../src/assets/images/health.jpg";
import PrimaryButton from "../../../components/primaryButton/PrimaryButton";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="">
      <div class="relative">
        <img
          className="w-full md:h-96 h-48"
          src={healthCare}
          alt="health-care"
        />
        <div className="md:absolute md:top-1/2 md:left-1/2 md:block grid grid-cols-1 md:my-0 my-6">
          <h1 className="md:text-amber-400 md:mt-0 -mt-5 mb-2 lg:text-4xl md:text-2xl text-xl md:mb-6 font-medium">
            Your healthcare benefit
          </h1>
          <Link
            to="/login"
            class=" w-1/2 mx-auto md:text-xl text-sm py-2 px-12 bg-blue-300 rounded-md cursor-pointer hover:bg-blue-200 "
          >
            Login to DU Medical
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
