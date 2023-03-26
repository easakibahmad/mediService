import React from "react";
import { Link } from "react-router-dom";
import message from "../../../assets/images/message.jpg";

const InfoCardTwo = () => {
  return (
    <div>
      <Link className="hover:text-purple-600  grid grid-cols-4 items-center border-t-2 md:border-r-2 p-4">
        <img
          src={message}
          alt="search-icon"
          className="rounded-full w-20 h-20"
        />
        <div className="col-span-3">
          <h1 className="font-medium">TALK TO US</h1>
          <p className="text-sm lowercase">
            SEND US YOUR QUESTIONS, COMMENTS, OR CONCERNS.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default InfoCardTwo;
