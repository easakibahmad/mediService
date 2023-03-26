import React, { useState } from "react";
import AppointmentBanner from "./AppointmentBanner/AppointmentBanner";
import AvailableAppointment from "./AvailableAppointment/AvailableAppointment";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      <div
        className="h-8 md:pl-6 pl-2 md:h-20 flex items-center"
        style={{
          backgroundColor: "#481D1A",
        }}
      >
        {" "}
        <h1 className="md:text-4xl text-xl font-medium text-white">
          Book an Appointment
        </h1>
      </div>
      <div className="md:h-2 h-1 bg-blue-500"></div>
      <AppointmentBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></AppointmentBanner>
      <AvailableAppointment selectedDate={selectedDate}></AvailableAppointment>
    </div>
  );
};

export default Appointment;
