import { useQuery } from "@tanstack/react-query";
import React from "react";
import ServiceCard from "./ServiceCard/ServiceCard";
import Loading from "../../Shared/Loading/Loading";

const Services = () => {
  const { data: appointOptions = [], isLoading } = useQuery({
    // added date as query key
    queryKey: ["doctorsServices"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/doctorsServices`);
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="">
      <div className="md:h-12 h-6 pl-8 grid items-center md:text-2xl text-md font-medium bg-black text-white">
        Available Services
      </div>
      <div className="h-1 bg-green-400"></div>
      <div className=" grid md:grid-cols-2 grid-cols-1 my-12 gap-10 px-20">
        {appointOptions.map((option) => (
          <ServiceCard key={option._id} option={option}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
