import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ option }) => {
  //   console.log(option);
  const { name, slots, pictureUrl } = option;
  return (
    <div className="grid border md:grid-cols-2 grid-cols-1 md:gap-0 gap-4 items-center">
      <div className=" border">
        <img src={pictureUrl} alt="doctor" className="md:h-64 h-52 w-full" />
      </div>
      <div className="grid grid-cols-1 gap-1">
        <div className="md:pl-4">
          <p className="text-xl font-medium">{name}</p>
          <p className="text-sm font-medium">
            {slots?.length} {slots?.length > 1 ? "slots" : "slot"} available
          </p>
        </div>
        <Link
          className="hover:text-blue-600 hover:border-blue-600 flex justify-center font-medium border-2 md:px-8 md:py-2 px-4 py-1 md:mx-2 text-sm md:text-medium"
          to="/appointment"
        >
          Appointment
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
