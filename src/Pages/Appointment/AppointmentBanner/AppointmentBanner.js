import React from "react";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import appointment from "../../../assets/images/appointment.png";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <header
      className="m-8 p-8"
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div className="lg:mr-8 sm:mt-8 lg:mt-0">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            ></DayPicker>
          </div>
        </div>
      </div>
      <p className="text-center font-bold md:text-3xl text-xl mt-8">
        Selected date: {format(selectedDate, "PPPP")}
      </p>
    </header>
  );
};

export default AppointmentBanner;
