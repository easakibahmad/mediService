import React from "react";
import Doctor from "./Doctor/Doctor";

const Providers = () => {
  return (
    <div className="mb-12">
      {" "}
      <div className="h-8 md:pl-6 pl-2 md:h-20 flex items-center bg-black">
        {" "}
        <h1 className="md:text-4xl text-xl font-medium text-white">
          Doctors in Services
        </h1>
      </div>
      <div className="md:h-2 h-1 bg-teal-400"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-12 gap-10 pt-8 px-12">
        <Doctor></Doctor>
        <Doctor></Doctor>
        <Doctor></Doctor>
        <Doctor></Doctor>
        <Doctor></Doctor>
        <Doctor></Doctor>
      </div>
    </div>
  );
};

export default Providers;
