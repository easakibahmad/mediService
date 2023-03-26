import React from "react";
import NewsInfoCard from "./NewsInfoCard/NewsInfoCard";

const News = () => {
  return (
    <div className="my-8 px-8 shadow-l-2xl h-full">
      <h1 className="text-center mb-6 text-4xl font-medium">News</h1>
      <div className="grid grid-cols-1 gap-3 ">
        <NewsInfoCard></NewsInfoCard>
        <NewsInfoCard></NewsInfoCard>
        <NewsInfoCard></NewsInfoCard>
        <NewsInfoCard></NewsInfoCard>
        <NewsInfoCard></NewsInfoCard>
      </div>
    </div>
  );
};

export default News;
