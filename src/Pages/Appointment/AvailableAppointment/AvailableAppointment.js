import { format } from "date-fns";
import React, { useState } from "react";
import AppointmentOpt from "../AppointmentOpt/AppointmentOpt";
import AppointmentModal from "../AppointmenModal/AppointmentModal";
import { useQuery } from "@tanstack/react-query";

const AvailableAppointment = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);

  const { data: appointOptions = [] } = useQuery({
    queryKey: ["doctorsServices"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/doctorsServices");
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="m-16">
      <p className="font-bold text-center text-purple-700 mb-10">
        Available appointments on: {format(selectedDate, "PPPP")}
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
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
