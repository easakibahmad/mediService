import React from "react";
import { Link } from "react-router-dom";
import clock from "../../../assets/images/clock.png";

const UrgentCare = () => {
  return (
    <div
      className="md:grid md:grid-cols-4 p-6 items-center rounded md:text-xl text-sm text-white font-medium"
      style={{ backgroundColor: "#c15435" }}
    >
      <div>
        <img className="w-24 h-24 rounded-full" src={clock} alt="clock" />
      </div>
      <div className="md:col-span-3 ">
        <h1 className="text-2xl">Urgent Care</h1>
        <p className="mb-4">
          Use our online reservation system to reserve your place in line.
        </p>
        <Link
          className="cursor-pointer px-10 py-2 rounded hover:text-black"
          style={{ backgroundColor: "#db6b55" }}
          to="/appointment"
        >
          Reserve now
        </Link>
      </div>
    </div>
  );
};

export default UrgentCare;
