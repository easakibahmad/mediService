import React from "react";
import search from "../../../assets/images/search.png";
import { Link } from "react-router-dom";

const InfoCard = () => {
  return (
    <Link className="hover:text-purple-600 grid grid-cols-4 items-center border-t-2 md:border-r-2 p-4">
      <img src={search} alt="search-icon" className="rounded-full w-20 h-20" />
      <div className="col-span-3">
        <h1 className="font-medium">HELP SOMEONE IN NEED</h1>
        <p className="text-sm lowercase">
          IF YOU'RE CONCERNED ABOUT A FRIEND OR ACQUAINTANCE, WE’RE HERE TO
          HELP.
        </p>
      </div>
    </Link>
  );
};

export default InfoCard;
