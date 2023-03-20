import React from "react";
import PrimaryButton from "../../../components/primaryButton/PrimaryButton";

const AppointmentOpt = ({ option, setTreatment }) => {
  const { slots, name } = option;
  return (
    <div className="border border-white rounded">
      <div className="card ">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{slots.length > 0 ? slots[0] : "try later"}</p>
          <p>
            {slots.length} {slots.length > 1 ? "spaces" : "space"} available
          </p>
          <div className="card-actions justify-end">
            <label
              disabled={slots.length === 0}
              htmlFor="booking-modal"
              className="btn rounded"
              onClick={() => setTreatment(option)}
            >
              Book Now{" "}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOpt;
