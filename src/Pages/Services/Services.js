import { useQuery } from "@tanstack/react-query";
import React from "react";
import ServiceCard from "./ServiceCard/ServiceCard";
import Loading from "../../Shared/Loading/Loading";

const Services = () => {
  const { data: appointOptions = [], isLoading } = useQuery({
    // added date as query key
    queryKey: ["doctorsServices"],
    queryFn: async () => {
      const res = await fetch(
        `https://medi-service-server-site.vercel.app/doctorsServices`
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="">
      <div
        className="h-8 md:pl-6 pl-2 md:h-12 flex items-center"
        style={{
          backgroundColor: "#481D1A",
        }}
      >
        {" "}
        <h1 className="md:text-2xl text-xl font-bold text-white">
          Available Services
        </h1>{" "}
      </div>
      <div className=" grid md:grid-cols-2 grid-cols-1 my-12 gap-10 px-20">
        {appointOptions.map((option) => (
          <ServiceCard key={option._id} option={option}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
