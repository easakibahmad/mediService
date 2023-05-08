import React from "react";
import { Link } from "react-router-dom";

const NewsInfoCard = ({ item }) => {
  const { date, heading, _id, description } = item;
  return (
    <div className="grid grid-cols-1 gap-2">
      <p className="text-sm lowercase">{date}</p>
      <Link
        to={`/news/${_id}`}
        className="font-medium hover:text-indigo-500 text-fuchsia-500"
      >
        {heading}
      </Link>
      <p className="text-sm">{description.slice(0, 160)}...</p>
      <hr />
    </div>
  );
};

export default NewsInfoCard;
