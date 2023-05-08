import React from "react";
import { useLoaderData } from "react-router-dom";

const NewsDetail = () => {
  const itemData = useLoaderData();
  console.log(itemData);
  const { date, heading, authorName, description } = itemData[0];
  return (
    <div className="m-4 md:m-8 p-4 md:p-8 rounded shadow-lg grid grid-cols-1 gap-2">
      <h1 className="md:text-3xl text-xl font-bold text-blue-400">{heading}</h1>
      <div>
        <p className="text-sm">{date}</p>
        <p className="text-sm">{authorName}</p>
      </div>
      <p className="md:text-xl text-sm">{description}</p>
    </div>
  );
};

export default NewsDetail;
