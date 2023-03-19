import React from "react";
import quote from "../../../assets/icons/quote.svg";
import men1 from "../../../assets/images/people1.png";
import men2 from "../../../assets/images/people2.png";
import men3 from "../../../assets/images/people3.png";
import Review from "./Review/Review";

const Testimonial = () => {
  const reviewData = [
    {
      id: 1,
      icon: men1,
    },
    {
      id: 2,
      icon: men2,
    },
    {
      id: 3,
      icon: men3,
    },
  ];
  return (
    <div className="m-16">
      <div className="flex justify-between mb-4">
        <div className="font-bold text-2xl">Testimonial</div>
        <div>
          <img className="md:w-24 w-16" src={quote} alt="" />
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {reviewData.map((item) => (
          <Review key={item.id} item={item}></Review>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
