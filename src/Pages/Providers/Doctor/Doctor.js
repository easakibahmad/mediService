import React from "react";
import doctor from "../../../assets/images/doctor1.jpeg";
import { Link } from "react-router-dom";

const Doctor = () => {
  return (
    <div className="card glass">
      <figure>
        <img src={doctor} alt="car!" className="w-full" />
      </figure>
      <div className="card-body p-0">
        <div className="p-4">
          <h2 className="card-title">Dr Angelina</h2>
          <p>
            <span className="font-medium">Speciality - </span> Senior consultant
          </p>
          <p>
            <span className="font-medium">Degree - </span> MBBS, FCPS
          </p>
        </div>
        <div className="card-actions ">
          <Link
            to="/appointment"
            className="btn btn-primary rounded-none w-full"
          >
            Make an appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
