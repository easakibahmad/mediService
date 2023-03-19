import React from "react";
import PrimaryButton from "../../../../components/primaryButton/PrimaryButton";

const InfoCard = ({ card }) => {
  const { icon } = card;
  return (
    <div>
      <div className="card card-side h-full md:mx-4 p-2 border border-white rounded shadow-xl">
        <figure>
          <img src={icon} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <PrimaryButton>Start Now</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
