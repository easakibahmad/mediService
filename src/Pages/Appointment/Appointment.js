import React, { useState } from "react";
import AppointmentBanner from "./AppointmentBanner/AppointmentBanner";
import AvailableAppointment from "./AvailableAppointment/AvailableAppointment";

const Appointment = () => {
  // Create a new date object for tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [selectedDate, setSelectedDate] = useState(tomorrow);

  return (
    <div>
      <div
        className="h-8 md:pl-6 pl-2 md:h-12 flex items-center"
        style={{
          backgroundColor: "#481D1A",
        }}
      >
        {" "}
        <h1 className="md:text-2xl text-xl font-bold text-white">
          Book an Appointment
        </h1>
      </div>
      {/* <div className="md:h-2 h-1 bg-blue-500"></div> */}
      <AppointmentBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></AppointmentBanner>
      <AvailableAppointment selectedDate={selectedDate}></AvailableAppointment>
    </div>
  );
};

export default Appointment;
