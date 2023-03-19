import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "./Service/Service";

const Services = () => {
  const serviceData = [
    {
      id: 1,
      icon: fluoride,
    },
    {
      id: 2,
      icon: cavity,
    },
    {
      id: 3,
      icon: whitening,
    },
  ];
  return (
    <div className="m-16">
      <div className="mb-10">
        <h3 className="text-4xl text-center font-bold text-purple-500">
          Services
        </h3>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {serviceData.map((item) => (
          <Service key={item.id} item={item}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
