import React from "react";
import duMedical from "../../../../src/assets/images/duMedical.jpeg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="">
      <div class="relative">
        <img
          className="w-full md:h-96 h-48"
          src={duMedical}
          alt="health-care"
          style={{ filter: "brightness(40%)" }}
        />
        <div className="md:absolute md:top-1/2 md:left-1/2 md:block grid grid-cols-1 md:my-0 my-6">
          <h1 className="text-white md:mt-0 -mt-5 mb-2 lg:text-4xl md:text-2xl text-xl md:mb-6 font-medium">
            Healthcare for your lifestyle
          </h1>
          <Link
            to="/login"
            class=" w-1/2 mx-auto md:text-xl font-bold text-sm py-2 px-12 bg-green-500   rounded-md cursor-pointer hover:bg-blue-400 "
          >
            Login to DU Medical
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
