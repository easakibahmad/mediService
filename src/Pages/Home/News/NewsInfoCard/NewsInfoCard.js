import React from "react";
import { Link } from "react-router-dom";

const NewsInfoCard = () => {
  return (
    <div className="grid grid-cols-1 gap-2">
      <p className="text-sm lowercase">SEPTEMBER 7, 2022</p>
      <Link className="font-medium hover:text-indigo-500 text-fuchsia-500">
        Updated COVID-19 booster vaccines are here. Here’s what you need to
        know.
      </Link>
      <p className="text-sm">
        On September 1, the Centers for Disease Control (CDC) recommended the
        newly updated COVID-19 booster vaccines. Here are some frequently asked
        questions about the vaccines, eligibility, and more.
      </p>
      <hr />
    </div>
  );
};

export default NewsInfoCard;
