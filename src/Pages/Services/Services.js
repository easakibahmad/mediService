import React from "react";
import femaleDoctor from "../../assets/images/femaleDoctor.jpg";
import Doctor from "../Providers/Doctor/Doctor";

const Services = () => {
  return (
    <div className="">
      <div className="md:h-12 h-6 pl-8 grid items-center md:text-2xl text-md font-medium bg-black text-white">
        Available Services
      </div>
      <div className="h-1 bg-green-400"></div>
      <img src={femaleDoctor} alt="" className="md:h-96 h-72 w-full" />
      <div className=" grid grid-cols-4 h-full w-full -mt-48 px-20">
        <Doctor></Doctor>
        <Doctor></Doctor>
      </div>
    </div>
  );
};

export default Services;
