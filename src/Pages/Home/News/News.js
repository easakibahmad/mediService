import React from "react";
import NewsInfoCard from "./NewsInfoCard/NewsInfoCard";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Shared/Loading/Loading";

const News = () => {
  const { data: newsData = [], isLoading } = useQuery({
    // added date as query key
    queryKey: ["news"],
    queryFn: async () => {
      const res = await fetch(
        `https://medi-service-server-site-easakibahmad.vercel.app/news`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="my-8 px-8 shadow-l-2xl h-full">
      <h1 className="text-center mb-6 text-4xl font-medium">News</h1>
      <div className="grid grid-cols-1 gap-3 ">
        {newsData.map((item) => (
          <NewsInfoCard key={item._id} item={item}></NewsInfoCard>
        ))}
      </div>
    </div>
  );
};

export default News;
