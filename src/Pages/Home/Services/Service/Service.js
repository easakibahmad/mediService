import React from "react";
import PrimaryButton from "../../../../components/primaryButton/PrimaryButton";

const Service = ({ item }) => {
  const { icon } = item;
  return (
    <div>
      <div className="card card-compact border border-white p-3 rounded shadow-xl">
        <figure>
          <img src={icon} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <PrimaryButton>Start Now</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
