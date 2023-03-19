import React from "react";

const Review = ({ item }) => {
  const { icon } = item;
  return (
    <div>
      <div className="card border border-white shadow-xl rounded">
        <div className="avatar mx-4 mt-6">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={icon} alt="" />
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
