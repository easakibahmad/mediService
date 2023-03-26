import { format } from "date-fns";
import React, { useState } from "react";
import AppointmentOpt from "../AppointmentOpt/AppointmentOpt";
import AppointmentModal from "../AppointmenModal/AppointmentModal";
import { useQuery } from "@tanstack/react-query";

const AvailableAppointment = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);

  // for date wise data loading
  const date = format(selectedDate, "PP");

  const { data: appointOptions = [] } = useQuery({
    // added date as query key
    queryKey: ["doctorsServices", date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/doctorsServices?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="mt-12  px-16 pb-16 shadow-md">
      <p
        className="font-bold lg:text-xl mb-6 text-sm text-center"
        style={{
          color: "#184C4f",
        }}
      >
        Available appointments on: {format(selectedDate, "PPPP")}
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
        {appointOptions.map((option) => (
          <AppointmentOpt
            setTreatment={setTreatment}
            key={option._id}
            option={option}
          ></AppointmentOpt>
        ))}
      </div>
      {treatment && (
        <AppointmentModal
          selectedDate={selectedDate}
          treatment={treatment}
          setTreatment={setTreatment}
        ></AppointmentModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
