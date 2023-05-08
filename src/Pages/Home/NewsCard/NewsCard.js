import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ item }) => {
  const { heading, imgURL, _id, description } = item;
  return (
    <Link to={`/info/${_id}`} className="grid grid-cols-1 gap-3 shadow-lg pb-4">
      <img className="w-full h-48" src={imgURL} alt="notFound" />
      <h1
        className="text-2xl font-medium px-3"
        style={{
          color: "#209EC5",
        }}
      >
        {heading}
      </h1>
      <p className="px-3 text-sm">{description.slice(0, 200)}...</p>
    </Link>
  );
};

export default NewsCard;
