import React from "react";
import help from "../../../assets/images/help.jpg";
import { Link } from "react-router-dom";

const NewsCard = () => {
  return (
    <Link className="grid grid-cols-1 gap-3 shadow-lg pb-4">
      <img className="w-full h-48" src={help} alt="" />
      <h1
        className="text-2xl font-medium px-3"
        style={{
          color: "#209EC5",
        }}
      >
        Helping Others
      </h1>
      <p className="px-3 text-sm">
        How should you respond if a friend or acquaintance seems especially
        stressed or troubled? Student Mental Health and Counseling Services can
        help.
      </p>
    </Link>
  );
};

export default NewsCard;
