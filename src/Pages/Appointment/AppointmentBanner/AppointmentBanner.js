import React from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import appointment from "../../../assets/images/duMedical.jpeg";
import medicalTeam from "../../../assets/images/doctorsServices.png";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <header
      className=""
      style={{
        background: `url(${appointment})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="hero pt-8 pb-4">
        <div className="hero-content  text-md flex-col md:flex-row-reverse">
          <img
            src={medicalTeam}
            alt="medicalTeam"
            className="md:block hidden lg:w-1/2 h-52"
          />
          <div
            style={{
              color: "#184C4f",
              backgroundColor: "white",
            }}
          >
            <DayPicker
              disabled={{ before: new Date() }}
              className=" py-1 px-3 "
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            ></DayPicker>
          </div>
        </div>
      </div>
      {/* <p className="text-center font-bold md:text-3xl text-xl mt-8">
        Selected date: {format(selectedDate, "PPPP")}
      </p> */}
    </header>
  );
};

export default AppointmentBanner;
