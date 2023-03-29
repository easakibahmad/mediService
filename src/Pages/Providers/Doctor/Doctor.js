import React from "react";
import { Link } from "react-router-dom";

const Doctor = ({ option }) => {
  const { name, doctorPhotoUrl, speciality, degree, phone, email } = option;
  return (
    <div className="grid grid-cols-2 items-center">
      <div className="mr-4">
        <img
          src={doctorPhotoUrl}
          alt="doctor"
          className="md:h-64 h-52 w-full"
        />
      </div>
      <div className="grid grid-cols-1 gap-1">
        <p className="text-xl font-medium">{name}</p>
        <p className="text-sm">Speciality: {speciality}</p>
        <p className="text-sm hidden md:block">Degree: {degree}</p>
        <p className="text-sm">Phone: +{phone}</p>
        <p className="text-sm hidden md:block">E-mail: {email}</p>
        <Link
          className="hover:text-blue-600 hover:border-blue-600 flex justify-center border-2 md:px-8 md:py-2 px-4 py-1 text-sm md:text-medium"
          to="/appointment"
        >
          <span className="hidden md:block mr-1">Get an</span> Appointment
        </Link>
      </div>
    </div>
  );
};

export default Doctor;
