import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard/InfoCard";

const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      icon: clock,
    },
    {
      id: 2,
      icon: phone,
    },
    {
      id: 3,
      icon: marker,
    },
  ];
  return (
    <div className="m-6 grid gap-4 lg:grid-cols-3 md:grid-cols-2">
      {cardData.map((card) => (
        <InfoCard key={card.id} card={card}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;
