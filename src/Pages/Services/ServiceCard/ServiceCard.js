import React from "react";

const ServiceCard = ({ option }) => {
  //   console.log(option);
  const { name, slots } = option;
  return (
    <div>
      <div>{name}</div>
      <div>
        {slots?.length} {slots?.length > 1 ? "slots" : "slot"} available
      </div>
    </div>
  );
};

export default ServiceCard;
