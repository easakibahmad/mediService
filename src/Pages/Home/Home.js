import React from "react";
import Banner from "./Banner/Banner";
import InfoCard from "./InfoCard/InfoCard";
import News from "./News/News";
import NewsCard from "./NewsCard/NewsCard";
import UrgentCare from "./UrgentCare/UrgentCare";
import InfoCardTwo from "./InfoCardTwo/InfoCardTwo";
import Loading from "../../Shared/Loading/Loading";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const { data: infoData = [], isLoading } = useQuery({
    // added date as query key
    queryKey: ["info"],
    queryFn: async () => {
      const res = await fetch(
        `https://medi-service-server-site-easakibahmad.vercel.app/info`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <Banner></Banner>
      <div className="grid lg:grid-cols-6  md:grid-cols-4 grid-cols-1">
        <div className="md:col-span-3 lg:col-span-4 shadow-xl">
          <div className="md:m-12">
            <UrgentCare></UrgentCare>
          </div>
          <div className="md:grid-cols-2 m-8 grid grid-cols-1 gap-12">
            {infoData.map((item) => (
              <NewsCard key={item._id} item={item}></NewsCard>
            ))}
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 mx-4">
            <InfoCard></InfoCard>
            <InfoCardTwo></InfoCardTwo>
          </div>
        </div>
        <div className="md:col-span-1 lg:col-span-2">
          <News></News>
        </div>
      </div>
      <div className="md:h-12 h-6 bg-pink-800"></div>
    </div>
  );
};

export default Home;
