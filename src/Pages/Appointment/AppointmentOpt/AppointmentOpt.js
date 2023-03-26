import React from "react";
import PrimaryButton from "../../../components/primaryButton/PrimaryButton";

const AppointmentOpt = ({ option, setTreatment }) => {
  const { slots, name } = option;
  return (
    <div className="border border-black rounded ">
      <div className="p-4">
        <h2 className="card-title">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "try later"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
      </div>
      <div className="">
        <label
          disabled={slots.length === 0}
          htmlFor="booking-modal"
          className="btn btn-sm rounded w-full"
          onClick={() => setTreatment(option)}
        >
          Book Now{" "}
        </label>
      </div>
    </div>
  );
};

export default AppointmentOpt;
