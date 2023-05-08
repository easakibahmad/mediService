import React from "react";
import { useLoaderData } from "react-router-dom";

const InfoDetail = () => {
  const itemData = useLoaderData();
  console.log(itemData);
  const { heading, imgURL, description } = itemData[0];
  return (
    <div>
      <div className="m-4 md:m-8 p-4 md:p-8 rounded shadow-lg grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-3">
        <img
          src={imgURL}
          className="w-full rounded border-4 p-2 md:h-72 h-64 my-auto"
          alt=""
        />
        <div className="my-auto grid grid-cols-1 gap-2">
          <h1 className="md:text-3xl text-xl font-bold text-blue-400">
            {heading}
          </h1>

          <p className="md:text-md text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoDetail;
