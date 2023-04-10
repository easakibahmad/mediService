import { useQuery } from "@tanstack/react-query";
import React from "react";
import Doctor from "./Doctor/Doctor";
import Loading from "../../Shared/Loading/Loading";

const Providers = () => {
  const { data: doctorsData = [], isLoading } = useQuery({
    // added date as query key
    queryKey: ["doctorsServices"],
    queryFn: async () => {
      const res = await fetch(
        `https://medi-service-server-site.vercel.app/doctorsDetails`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="mb-12">
      {" "}
      <div className="h-8 md:pl-6 pl-2 md:h-20 flex items-center bg-black">
        {" "}
        <h1 className="md:text-4xl text-xl font-medium text-white">
          Doctors in Service
        </h1>
      </div>
      <div className="md:h-2 h-1 bg-teal-400"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2  md:gap-12 gap-10 pt-8 px-12">
        {doctorsData.map((option) => (
          <Doctor key={option._id} option={option}></Doctor>
        ))}
      </div>
    </div>
  );
};

export default Providers;
